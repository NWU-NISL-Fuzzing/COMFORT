// 导入 esprima 库
const esprima = require('esprima');
const estraverse = require('estraverse');
const escodegen = require('escodegen');
const jshint = require("jshint");
//引入commander
const commander = require("commander");

const fs = require("fs");

let filename = '';

commander
    .option('-f, --filename [filename]', 'Set filename to execute')
    .parse(process.argv);

if (commander.filename)
    filename = commander.filename;

/**
 * 从文件中读取原始语料并通过回调函数开始处理
 * @param {type} filename 文件名
 * @param {type} callback 执行变量名回填的回调函数
 * @returns {undefined}
 */
const readFromFile = function (filename, callback) {
    fs.readFile(filename, 'utf-8', function (err, data) {
        if (err){
            console.log('NISL ERROR OCCURED: ' + err);
            console.log("----------");
        }
        else
            callback(data.toString());
    });
};

const execute = function(data){
    let testcaseContent = data;
    // 函数字面量定义
    let functionExpressions = [];
    // 函数关键字定义
    let functionDeclarations = [];

    try{
        var ast = esprima.parseScript(testcaseContent);
    }
    catch (e) {
        console.log('NISL ERROR OCCURED: ' + e);
    }

    // 对于当前函数来说的全局变量
    var globalVariables = [];
    // 进入函数体时的全局变量个数
    var enterCount = 0;
    // 离开函数体时的全局变量个数
    var leaveCount = 0;
    // 遍历语法树，抽取function节点及相对全局变量。
    estraverse.traverse(ast, {
        enter(node, parent) {
            /* 按照节点类型进行处理
            1，变量定义，将相应变量的定义放入相对全局变量
            2，函数字面量定义，这一块转换为关键字定义，函数名称去除
            3，关键字定义，将函数节点和相对全局变量入栈
                 */
            if (node.type === "VariableDeclaration"){
                let declarations = node.declarations;
                let kind = node.kind;
                for (let i = 0; i < declarations.length; i++) {
                    let statement = kind + " " + escodegen.generate(declarations[i]) + ";";
                    let id = declarations[i].id.name;
                    let item = {id: id, statement: statement};
                    globalVariables.push(item);
                    leaveCount += 1;
                }
            }
            if (node.type === "FunctionExpression"){
                if (parent.type === "VariableDeclarator"){
                    enterCount = globalVariables.length;
                    // 将全局变为局部，防止联动变换
                    let gVariables = [].concat(globalVariables);
                    // pop是因为如果函数为字面量定义则会多添加自身，故这块去除一位
                    gVariables.pop();
                    let item = {gv: gVariables, nd: node};
                    functionExpressions.push(item);
                }
                else{
                    enterCount = globalVariables.length;
                    let NODE = JSON.parse(JSON.stringify(node));
                    NODE.id = null;
                    let gVariables = [].concat(globalVariables);
                    let item = {gv: gVariables, nd: NODE};
                    functionExpressions.push(item);
                }
            }
            else if (node.type === "FunctionDeclaration"){
                enterCount = globalVariables.length;
                let gVariables = [].concat(globalVariables);
                let NODE = JSON.parse(JSON.stringify(node));
                NODE.id = null;
                let item = {gv: gVariables, nd: NODE};
                functionDeclarations.push(item);
            }
        },
        leave(node) {
            // 在退出时，需删除进入时添加的全局变量
            if (node.type === "FunctionExpression"){
                for (let j = 0; j < (leaveCount - enterCount); j++){
                    globalVariables.pop();
                }
                leaveCount = enterCount;
            }
            else if (node.type === "FunctionDeclaration"){
                for (let j = 0; j < (leaveCount - enterCount); j++){
                    globalVariables.pop();
                }
                leaveCount = enterCount;
            }
        }
    });

    for (let i = 0; i < functionExpressions.length; i++){
        let globalvariables = functionExpressions[i].gv;
        // 进行值传递，而不是引用传递。
        let node = JSON.parse(JSON.stringify(functionExpressions[i].nd));
        len = node.body.body.length;
        if (len === 0){
            continue;
        }
        let newBody = [];
        for (let i = 0; i < len; i++){
            item = node.body.body[i];
            if (item.type === "ExpressionStatement" && typeof item.expression !== "undefined"){
                if (typeof item.expression.callee !== "undefined"){
                    if(item.expression.callee.type === "Identifier" && item.expression.callee.name === "print"){
                        //去除print语句
                    }
                    else if(typeof item.expression.callee.object !== "undefined" && typeof item.expression.callee.property !== "undefined"){
                        if (item.expression.callee.object.name === "console" && item.expression.callee.property.name !== null){
                            // 去除console.XX语句
                        }
                        else{
                            newBody.push(item);
                        }
                    }
                    else{
                        newBody.push(item);
                    }
                }
                else{
                    newBody.push(item);
                }
            }
            else{
                newBody.push(item);
            }
        }
        node.body.body = newBody;
        let text = escodegen.generate(node);
        let undefinedIds = new Set(getUndefinedIds(text));
        undefinedIds = Array.from(undefinedIds);
        for (let j = 0; j < undefinedIds.length; j++){
            let statement = getStatementById(globalvariables, undefinedIds[j]);
            if (statement.length > 0 ){
                node.body.body.unshift(esprima.parseScript(statement).body[0]);
            }
        }
        let statement = escodegen.generate(node);
        console.log(statement);
        console.log("----------");
    }


    for (let i = 0; i < functionDeclarations.length; i++){
        let globalvariables = functionDeclarations[i].gv;
        let node = JSON.parse(JSON.stringify(functionDeclarations[i].nd));
        len = node.body.body.length;
        if (len === 0){
            continue;
        }
        let newBody = [];
        for (let i = 0; i < len; i++){
            item = node.body.body[i];
            if (item.type === "ExpressionStatement" && typeof item.expression !== "undefined"){
                if (typeof item.expression.callee !== "undefined"){
                    if(item.expression.callee.type === "Identifier" && item.expression.callee.name === "print"){
                        //去除print语句
                    }
                    else if(typeof item.expression.callee.object !== "undefined" && typeof item.expression.callee.property !== "undefined"){
                        if (item.expression.callee.object.name === "console" && item.expression.callee.property.name !== null){
                            // 去除console.XX语句
                        }
                        else{
                            newBody.push(item);
                        }
                    }
                    else{
                        newBody.push(item);
                    }
                }
                else{
                    newBody.push(item);
                }
            }
            else{
                newBody.push(item);
            }
        }
        node.body.body = newBody;
        let text = escodegen.generate(node);
        let undefinedIds = new Set(getUndefinedIds(text));
        undefinedIds = Array.from(undefinedIds);
        for (let j = 0; j < undefinedIds.length; j++){
            let statement = getStatementById(globalvariables, undefinedIds[j]);
            if (statement.length > 0 ){
                node.body.body.unshift(esprima.parseScript(statement).body[0]);
            }
        }
        let statement = escodegen.generate(node);
        console.log(statement);
        console.log("----------");
    }
};

//程序入口
readFromFile(filename, execute);

/**
 * JSHint中需要检查的选项
 * @type type 集合
 */
const jshintOptions = {
    undef: true
};

/**
 * JSHint中定义无须检查的变量，如console
 * @type type 集合
 */
const jshintPredef = {
    console: true
};

/**
 * 通过JSHint获取函数的未定义变量，旋即获得它调用的全局变量名
 * @param {type} statement 函数表达式
 * @returns {Array|getUndefinedIds.undefinedIds} 函数调用的所有全局变量名
 */
const getUndefinedIds = function (statement) {
    let undefinedIds = [];
    jshint.JSHINT(statement, jshintOptions, jshintPredef);
    let errors = jshint.JSHINT.errors;
    for (let i = 0; i < errors.length; i++)
        undefinedIds.push(errors[i].a);
    return undefinedIds;
};

/**
 * 通过变量名映射变量定义表达式，如：
 * a -> var a = 1;
 * @param {type} globalVariables 全局变量映射表
 * @param {type} id 变量名
 * @returns {String} 全局变量的定义表达式或者空字符串
 */
const getStatementById = function (globalVariables, id) {
    for (let i = 0; i < globalVariables.length; i++) {
        if (globalVariables[i].id === id)
            return globalVariables[i].statement;
    }
    return "";
};