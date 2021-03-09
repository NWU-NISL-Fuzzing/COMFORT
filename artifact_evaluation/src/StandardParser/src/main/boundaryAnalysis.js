// 导入 esprima 库
let esprima = require('esprima');
let estraverse = require('estraverse');
let escodegen = require('escodegen');
let toFunctionList = ['ToInteger', 'ToString', 'ToObject', 'ToNumber', 'ToBoolean'];
let {logger} = require('../log/log_configuration');

// 导入工具函数
let {stringExists, deduplicate, reserveNumber, sort, getRandomNumberByGivenRange} = require('./utils');

// 需要被递归调用的函数
function getBoundaryConditionsRecursively(functionString, functionName) {

        try {
            esprima.parseScript(functionString);
        } catch (e) {
            logger.error(`${functionName}解析出的代码中存在语法错误.`);
            return [];
        }

        // 到这一步，都是可以解析成语法树的
        let ast = esprima.parseScript(functionString);
        let parametersList = [];
        let totalResult = [];
        let searchList = [];
        let variablesMap = new Map();

        // 第一次遍历，找到函数的参数节点，将其放在 parameterNodesList中（参数节点列表）
        estraverse.traverse(ast, {
            enter: function(node, parent) {
                if (node.type === 'FunctionExpression' && parent.type === 'VariableDeclarator') {
                    for (let parameterNode of node.params) {
                        parametersList.push(parameterNode.name);
                        searchList.push(parameterNode.name);
                    }
                    this.break();
                }
            },
        });

        // 随后，创建每个参数列表的数据结构
        parametersList.forEach(function(parameter){
            let parameterObject = {};
            parameterObject.name = parameter;
            parameterObject.type = '';
            parameterObject.values = [];
            parameterObject.scopes = [];
            parameterObject.conditions = [];

            totalResult.push(parameterObject);
        });

        // 之后是一次核心遍历，目的是找出所有与this以及输入参数有关的边界条件语句节点
        // （注意这一次遍历只是找到相关语句节点，并将其存入对应的parameterObject的conditions中）
        estraverse.traverse(ast, {
            enter: function(node, parent) {

                // 遇到函数调用
                if (node.type === 'CallExpression' &&
                    (parent.type === 'VariableDeclarator' || parent.type === 'AssignmentExpression')
                ) {

                    let funcName = node.callee.name;
                    let afterParam;
                    if (parent.type === 'VariableDeclarator') { afterParam = parent.id.name; }
                    if (parent.type === 'AssignmentExpression') { afterParam = parent.left.name; }

                    // 情况1：假如函数是 ToXXX 形式的
                    if (stringExists(funcName, toFunctionList) && node.arguments.length === 1) {
                        let beforeParam = node.arguments[0].name;

                        // 判断beforeParam是否在searchList中
                        if (stringExists(beforeParam, searchList)) {

                            // 继续判断 beforeParam是否在parametersList中
                            if (stringExists(beforeParam, parametersList)) {
                                variablesMap.set(afterParam, beforeParam);
                                searchList.push(afterParam);
                                // 并记录下 beforeparam 的类型
                                totalResult.forEach(function(parameterObject) {
                                    if (parameterObject.name === beforeParam) {
                                        parameterObject.type = funcName.split('To')[1].toLowerCase()
                                    }
                                });
                            } else {
                                variablesMap.set(afterParam, variablesMap.get(beforeParam));  // 注意这里的含义
                                searchList.push(afterParam);
                            }
                        }
                    }

                    // 情况2：假如函数是特殊情况，比如这里
                    else if (stringExists(funcName, ['RequireObjectCoercible', 'thisNumberValue'])) {

                        // 它只接受一个参数，所以不用判断参数个数了
                        let beforeParam = node.arguments[0].name;

                        if (stringExists(beforeParam, searchList)) {
                            if (stringExists(beforeParam, parametersList)) {
                                // 当遇到 RequireObjectCoercible时，需要将 null 和 undefined 加入到该参数对象的 values当中
                                if (funcName === 'RequireObjectCoercible') {
                                    totalResult.forEach(function(parameterObject) {
                                        if (parameterObject.name === beforeParam) {
                                            parameterObject.values.push('null', 'undefined');
                                        }
                                    });
                                }

                                // 保存映射关系
                                variablesMap.set(afterParam, beforeParam);
                                searchList.push(afterParam);
                            } else {
                                variablesMap.set(afterParam, variablesMap.get(beforeParam));
                                searchList.push(afterParam);
                            }
                        }
                    }
                }

                // 遇到二元表达式
                // TODO:需要一个能保存映射链，或者回溯映射关系的数据结构，才能完全回溯
                // TODO:这里直接靠 BinaryExpression 来判断，实际上是不准确的，比如 a=a-1; 就会将 a-1 提取出来
                else if (node.type === 'BinaryExpression') {
                    let paramName = node.left.name;
                    if (stringExists(paramName, searchList)) {

                        if (stringExists(paramName, parametersList)) {
                            totalResult.forEach(function(parameterObject) {
                                if (parameterObject.name === paramName) {
                                    // parameterObject.conditions.push(escodegen.generate(node));
                                    parameterObject.conditions.push(node);
                                }
                            });
                        } else {
                            totalResult.forEach(function(parameterObject) {
                                if (parameterObject.name === variablesMap.get(paramName)) {
                                    node.left.name = variablesMap.get(paramName);
                                    // parameterObject.conditions.push(escodegen.generate(node));
                                    parameterObject.conditions.push(node);
                                }
                            });
                        }
                    }
                }
            },
        });

        // 最终的一次遍历：遍历 totalResult 中的每个元素，并依次传值
        totalResult.forEach(function(parameterObject) {

            // 遍历每一个参数的每个condition语句，从中分析出边界值，放入 scopes 中
            let conditionStatementsList = [];
            parameterObject.conditions.forEach(function(node) {

                // 若right是 Literal 类型，比如 radix === 5（正值）; 或者 radix === null;
                if (node.right.type === 'Literal') {

                    // 假如是 === 和 != 符号（由于我们的正则规则设定，所以不会存在 == 和 != 的情况）
                    if (node.operator === '===' || node.operator === '!==') {
                        if (node.right.raw === 'null') {
                            parameterObject.values.push('null');
                        } else {  // 此时右边只有可能是一个正数
                            parameterObject.values.push(node.right.value);
                        }
                    } else if (node.operator === '>=' || node.operator === '<=') {
                        parameterObject.values.push(node.right.value);
                        parameterObject.scopes.push(node.right.value);

                    } else {  // 除了 === 和 !== 以外，不会有和 NaN 比的情况
                        parameterObject.scopes.push(node.right.value);
                    }
                }

                // 若right是 UnaryExpression 类型，比如 radix === -5（负值，实际上是一个 UnaryExpression）;
                else if (node.right.type === 'UnaryExpression') {
                    if (node.right.operator === '-') {
                        // 先判断是否是 -Infinity
                        if (node.right.argument.type === 'Identifier') {
                            if (node.right.argument.name === 'Infinity') {
                                parameterObject.values.push('-Infinity');  // 注意这里的负号，而且需要处理成字符串形式
                            }
                        }
                        else if (node.right.argument.type === 'Literal') {
                            if (node.operator === '===' || node.operator === '!==') {
                                parameterObject.values.push(-(node.right.argument.value));  // 注意这里的负号
                            } else if (node.operator === '>=' || node.operator === '<='){
                                parameterObject.values.push(-(node.right.argument.value));  // 注意这里的负号
                                parameterObject.scopes.push(-(node.right.argument.value));
                            } else {
                                parameterObject.scopes.push(-(node.right.argument.value));
                            }
                        }
                    } else if (node.right.operator === '+') {
                        if (node.operator === '===' || node.operator === '!==') {
                            parameterObject.values.push(node.right.argument.value);  // 注意这里不需要负号
                        } else if (node.operator === '>=' || node.operator === '<=') {
                            parameterObject.values.push(node.right.argument.value);  // 注意这里不需要负号
                            parameterObject.scopes.push(node.right.argument.value);

                        } else {
                            parameterObject.scopes.push(node.right.argument.value);
                        }
                    }
                }

                // 若right是 Identifier 类型，比如 radix === null;
                else if (node.right.type === 'Identifier') {
                    if (node.right.name === 'NaN') {
                        parameterObject.values.push('NaN');
                    } else if (node.right.name === 'undefined') {
                        parameterObject.values.push('undefined');
                    } else if (node.right.name === 'Infinity') {
                        parameterObject.values.push('Infinity');
                    }
                }

                // 这一步是为了把其中的 node 转化为语句，因为以语句的形式存入文件后更方便检查
                conditionStatementsList.push(escodegen.generate(node));
            });

            let scopes = parameterObject.scopes;
            let values = parameterObject.values;

            // condition语句全部处理完成之后，开始按 scopes 取值
            scopes = reserveNumber(scopes);
            scopes = deduplicate(scopes);
            scopes = sort(scopes);

            if (scopes.length === 0) {

            } else if (scopes.length === 1) {
                values.push(scopes[0] + 1);
                values.push(scopes[0] - 1);
            } else {  // 长度 >= 2
                values.push(scopes[0] - 1);  // 第一个元素 - 1
                values.push(scopes[scopes.length-1] + 1);  // 最后一个元素 + 1

                // 中间元素，每两个之间取一个随机数
                for(let i = 0; i < scopes.length-1; i++) {
                    values.push(getRandomNumberByGivenRange(scopes[i], scopes[i + 1]));
                }
            }

            // 最后将 values 去重
            parameterObject.values = deduplicate(values);

            // 推断做完之后，为了存的时候方便看，将 conditions 中的元素由node变为语句
            parameterObject.conditions = conditionStatementsList;
        });
        return totalResult;
    }

// 主函数
function getBoundaryConditions(functionMap, apiName) {
    logger.info(`正在解析${apiName}的边界条件.`);

    // 3-31新增：传入参数由functionString和apiName，变成了functionMap
    // 所以第一步是从functionMap中读取到functionString和apiName
    let functionString = '';
    if (functionMap.get('core') !== undefined) {
        functionString = functionMap.get('core').toString();
    } else {
        logger.error(`由于解析时存在异常，所以拿不到core内容，解析${apiName}的边界条件失败，返回[].`);
        return [];
    }

    // 3-31新增：判空，假如传入的functionString为空字符串，那么说明前一步在转化为代码时失败了
    // 那么这一步只需返回 [] 即可
    if (functionString.length === 0) {
        logger.error(`由于获取到的functionString为空，解析${apiName}的边界条件失败，返回[].`);
        return [];
    }

    // 3-31新增：增加一个保存函数调用的数据结构，最终对其遍历
    let functionCallNodes = [];

    // 先得到functionString的结果
    let coreResult = getBoundaryConditionsRecursively(functionString, apiName);
    logger.info("初始的边界条件为：");
    logger.info(coreResult);
    if (coreResult.length === 0) {
        logger.error(`解析${apiName}初始的边界条件就失败了，返回[].`);
        return [];
    }

    // 再遍历一次functionString，找到其中的函数调用节点，加到functionCallNodes中
    // 能走到这一步，说明functionString肯定没有语法错误了
    let coreAst = esprima.parseScript(functionString);
    estraverse.traverse(coreAst, {
        enter: function(node, parent) {
            // 遇到函数调用
            if (node.type === 'CallExpression' &&
                (parent.type === 'VariableDeclarator' || parent.type === 'AssignmentExpression')
            ) {
                 functionCallNodes.push(node);
            }
        }
    });

    // 遍历functionCallNodes
    functionCallNodes.forEach(function(functionCallNode) {
        // 获取到函数名称和参数列表
        let functionName = functionCallNode.callee.name;
        let paramsList = functionCallNode.arguments;

        // 根据函数名称，到 functionMap中找其对应的functionString
        if (functionMap.has(String(functionName))) {

            logger.info("进入内嵌函数: " + functionName);
            let functionResult = getBoundaryConditionsRecursively(functionMap.get(String(functionName)), functionName);
            logger.info("解析出其边界条件为: ");
            logger.info(functionResult);

            // 将其结果，与传入参数之间，建立映射关系
            for(let i = 0; i < paramsList.length; i++) {
                let argumentName = paramsList[i].name;
                let argumentValues = [];
                if (functionResult[i+1] !== undefined) {
                    argumentValues = functionResult[i+1].values;  // 之所以取i+1，是因为第一个参数是that，对应时直接略过
                }

                // 将其values插入到coreResult的对应参数之中
                for(let j = 0; j < coreResult.length; j++) {

                    // 假如这个参数是有效的，那么就将其argumentValues补充到coreResult的对应values中
                    if (argumentName === coreResult[j].name) {

                        logger.info("经过内嵌函数分析，新增的边界条件为: ");
                        logger.info(argumentValues);
                        for (let o of argumentValues) {
                            coreResult[j].values.push(o)
                        }
                    }
                }
            }
        }
    });

    // 4-2更新：根据传入的API名称，判断this变量的类型
    // 假如未能判断出 this 的类型，则启用这一机制，经其第一个 . 左边的内容作为其类型传入；
    // 比如 String.prototype.toString() ，则判断 String 为其类型
    // TODO: 先不做，讨论之后再决定是否要做
    // if (coreResult.length !== 0 && coreResult[0].type.length === 0) {
    //     if (apiName.indexOf('.') !== -1) {
    //         dataType = apiName.split('.')[0];
    //         coreResult[0].type = dataType;
    //     }
    // }
    logger.info("最终的边界条件为：");
    logger.info(coreResult);


    // 最终返回总结果
    return coreResult;
}

exports.getBoundaryConditions = getBoundaryConditions;
