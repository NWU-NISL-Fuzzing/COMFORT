let mutation = require('estraverse');
let esprima = require('esprima');
let escodegen = require('escodegen');
let fs = require("fs");

let {getValues} = require("../StandardParser/src/main/main");

// as local arguments marker for arguments
const FLAG = "LOCAL-ARGUMENT";

function cartesian(boundaryConditions){
    if (boundaryConditions.length == 0){
        return[]
    }
    if (boundaryConditions.length ==1){
        let apiArgs = []
        for (let i=0; i<boundaryConditions[0].length;i++){
            apiArgs.push([boundaryConditions[0][i]]);
        }
        return apiArgs;
    }
    let result = boundaryConditions.reduce((last, current) => {
        const array = [];
        const tmp = [];
        last.forEach(par1 => {
            current.forEach(par2 => {
                tmp.push(par1 + "_" + par2);
                let c = [par1, par2];
                array.push([par1, par2]);
                // console.log()
            });
        });
        return array;
    });


    let expandArguments = function(args, argNum){
        let expandArray = function(arr,argNum){
            if (argNum<=1){
                return [arr];
            }
            let tmp = expandArray(arr[0], argNum-1);
            let re = tmp.concat([arr[1]]);
            return re;
        };
        for (let index=0; index<args.length;index++){
            args[index] = expandArray(args[index], argNum)
        }
        return args;
    };
    return  expandArguments(result, boundaryConditions.length);
}

function getCalleeObjectAst() {
    return {
        "type": "Identifier",
        "name": "nislCalleeObject"
    };
}

function getUndefinedAst() {
    return {
        "type": "Identifier",
        "name": "undefined"
    };
}

function getParameterAst(parameterLocation) {
    // the location of parameter location starts with zero
    return {
        "type": "Identifier",
        "name": "nislMutationParameter" + parameterLocation
    }
}
function getArgumentAst(argumentLocation) {
    // the location of parameter location starts with zero
    return {
        "type": "Identifier",
        "name": "nislMutationArgument" + argumentLocation
    }
}

function addArgumentToTestcase(testcase, args) {
    let tmp = testcase.split("\n");
    let insertPosition = 0;
    for (let i=tmp.length-1; i>=0; i--){
        if (tmp[i].includes("NISLFuzzingFunc(") || tmp[i].includes("NISLFuzzingFunc (")){
            insertPosition = i;
            break;
        }
    }
    for (let index=args.length-1; index>=0; index--){
        let argValue = JSON.stringify(args[index]);
        let template = "var nislMutationArgument" + index + " = " + argValue + ";";
        tmp.splice(insertPosition, 0, template);
    }
    return tmp.join("\n");
}

function getMutationArguments(apiBoundaryCondition) {
    let mutationLocation = [];
    let argumentsBoundary = [];
    for (let index in apiBoundaryCondition){
        let element = apiBoundaryCondition[index];
        if(element.values.length == 0){
            mutationLocation.push(false);
        }else {
            argumentsBoundary.push(element.values);
            mutationLocation.push(true);
        }
    }
    return {mutationArguments:cartesian(argumentsBoundary), mutationLocation: mutationLocation};
}

function mutateApi(jsSource, apiNode, mutationLocation) {
    /**
     * jsSource: the js source of testcase whose type is String
     * apiNode: the ES API node of abstract tree in testcase
     * apiType: ["prototype.method", "class.method", "function"]
     * parameter: the first element is flag of callee object, the N-th element is flag of parameter n; true and false
     * present mutation and not respectively.
     * [true,false,false] means that the first two parameters should be mutation, and the callee object dose not mutation;
     * [false, false, true] : the third parameter should be mutation, but not mutation the callee object and the first parameter
     * return: the mutated testcase
     */
    delete apiNode["ESAPI"];
    let ast = esprima.parseScript(jsSource,{ loc: true });
    mutation.traverse(ast, {
        // mutation API node
        enter: function (candidate) {
            // Find the specified API node that and mutation
            // The API have been matched
            if (JSON.stringify(candidate) == JSON.stringify(apiNode)){
                // mutation callee object of API
                if (mutationLocation[0]){
                    candidate["callee"]["object"] = getCalleeObjectAst();
                }
                // mutation the parameters of API
                for (let index = 1; index<mutationLocation.length; index++){
                    let parameterLocation = index -1;
                    // mutationLocation[index] == false means that the parameter of the API should be mutation
                    if (!mutationLocation[index]) {
                        // the parameter is not allowed to mutation, but whose value dose not present
                        if (candidate["arguments"][parameterLocation] == undefined){
                            // set the value parameter to undefined
                            candidate["arguments"][parameterLocation] = getUndefinedAst();
                        }
                        continue;
                    }
                    // mutation the parameter required
                    candidate["arguments"][parameterLocation] = getParameterAst(parameterLocation);
                }
            }
            // Add the formal parameters for the mutation, "var NISLFuzzingFunc = function (formal parameter) {...}"
            if (candidate.type == "VariableDeclarator" && candidate.id.name == "NISLFuzzingFunc"){
                if (mutationLocation[0]){
                    candidate["init"]["params"][candidate["init"]["params"].length] = getCalleeObjectAst();
                }
                for (let index = 1; index<mutationLocation.length; index++){
                    if (mutationLocation[index]){
                        candidate["init"]["params"][candidate["init"]["params"].length] = getParameterAst(index-1);
                    }
                }
            }
            // Add the arguments for the mutation,
            // "var NISLCallingResult = NISLFuzzingFunc(arguments);" or "NISLFuzzingFunc(arguments);"
            if (candidate.type == "CallExpression" && candidate.callee.name == "NISLFuzzingFunc"){
                let mutationArgumentCounter = 0;
                for (let index in mutationLocation){
                    let is_mutation = mutationLocation[index];
                    if (is_mutation){
                        candidate["arguments"][candidate["arguments"].length] = getArgumentAst(mutationArgumentCounter)
                        mutationArgumentCounter++;
                    }
                }
            }
        }
    });
    let generatedTestcase = escodegen.generate(ast);
    return generatedTestcase;
}

function addLocalArgumentsToBoundaryCondition(boundaryCondition, apiAstNode) {
    // callee object
    if (boundaryCondition.length >0 && boundaryCondition[0].values.length > 0){
        boundaryCondition[0].values.splice(0, 0, FLAG);
    }
    for (let i =1; i<boundaryCondition.length; i++){
        // if there is a local arguments on this parameter position
        if (i <= apiAstNode["arguments"].length) {
            boundaryCondition[i].values.splice(0, 0, FLAG);
        }
    }
    return boundaryCondition;
}

function splitLocalArgumentsList(mutation) {
    let localArgumentContainted = [];
    for (let i=mutation.mutationArguments.length-1; i >=0; i--){
        // arguments list contains the argument that come with testcase
        if (mutation.mutationArguments[i].indexOf(FLAG) != -1){
            let mutationArgumentList = mutation.mutationArguments[i];
            mutation.mutationArguments.splice(i,1);
            let mutationLocation = JSON.parse(JSON.stringify(mutation.mutationLocation)); // 深度复制，但是对于含有NaN, null, undefined等的复制会出现异常
            changeArgumentContainedLocalArgument(mutationArgumentList, mutationLocation);
            // let tmp = {mutationArgumentList:  mutationArgumentList, mutationLocation: mutationLocation}
            // localArgumentContainted.push(tmp);
            localArgumentContainted.push({mutationArgumentList:  mutationArgumentList, mutationLocation: mutationLocation})
        }
    }
    return [localArgumentContainted, mutation];
}

function findAllIndex(a,x) {
    var results = [],
        len = a.length,
        pos = 0;
    while (pos < len) {
        pos = a.indexOf(x, pos);
        if (pos === -1) {//未找到就退出循环完成搜索
            break;
        }
        results.push(pos);//找到就存储索引
        pos += 1;//并从下个位置开始搜索
    }
    return results;
}

function changeArgumentContainedLocalArgument(mutationArguments, mutationLocation) {
    let localArgumentsLocation = findAllIndex(mutationArguments, FLAG);
    let flag=-1;
    for (let i=0; i<mutationLocation.length;i++){
        if (mutationLocation[i]){
            flag++;
        }
        if (localArgumentsLocation.indexOf(flag) != -1){
            mutationArguments.splice(localArgumentsLocation, 1);
            mutationLocation[i] = false;
        }
    }
    // return [mutationArguments, mutationLocation];
}

function testcaseMutation(filePath){
    let file = fs.readFileSync(filePath).toString();
    let result = JSON.parse(file);
    let testcase = result.testcase;
    let node;
    let mutatedTestcases = [];
    let nodeNum = result.nodes.length;
    for (let index = 0; index < nodeNum; index++) {
        node = result.nodes[index];
        // 修改后的API参数传递方式
        let apiInfo = {};
        apiInfo["name"] = node["ESAPI"]["name"];
        apiInfo["argsNumber"] = node["arguments"].length;
        let boundaryCondition = getValues(apiInfo);
        if (boundaryCondition == undefined){continue;}
        boundaryCondition = addLocalArgumentsToBoundaryCondition(boundaryCondition,node);
        let mutation = getMutationArguments(boundaryCondition);
        let localArgumentContainedMutation;
        [localArgumentContainedMutation, mutation] = splitLocalArgumentsList(mutation);
        // API无法映射到ES标准或者该API没有可变异的边界条件
        if (mutation.mutationLocation.length == 0) continue;
        let generatedTestcase = mutateApi(testcase, node, mutation.mutationLocation);
        for (let index_mutationArgument in mutation.mutationArguments){
            mutatedTestcases.push(addArgumentToTestcase(generatedTestcase, mutation.mutationArguments[index_mutationArgument]));
        }
        for (let i in localArgumentContainedMutation){
            let genTestcaseTmp = mutateApi(testcase, node, localArgumentContainedMutation[i].mutationLocation);
            mutatedTestcases.push(addArgumentToTestcase(genTestcaseTmp, localArgumentContainedMutation[i].mutationArgumentList))
        }
    }
    return mutatedTestcases;
}

exports.getMutationArguments = getMutationArguments;
exports.testcaseMutation = testcaseMutation;
