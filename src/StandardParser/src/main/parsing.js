const path = require("path");
const fs = require("fs");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
let {oneToOneApiList} = require('../../resources/oneToOneApiList');  // 读取apiList
let {oneToManyApiObject} = require('../../resources/oneToManyApiObject');  // 读取apiList
let {apiNameTransform, getText, stringExists} = require('./utils');
let {apiNameHardEncoding} = require('../../resources/apiNameHardEncoding');
let {logger} = require('../log/log_configuration');

// 读取边界条件分析函数
let {getBoundaryConditions} = require('./boundaryAnalysis');

// 读取自定义异常类型
let {ApiTransformError} = require('./error');

// 读取核心的映射函数
let {textToCode} = require('./textToCode');

// 声明结果文件的路径
var targetPath = '../../resources/result_test.json'

// 加载 document
logger.info('正在加载document，请稍等...');
let htmlString = fs.readFileSync(path.join(__dirname, '../../resources/ES10-standard.html')).toString();
const dom = new JSDOM(htmlString);
let document = dom.window.document;

// 第一部分，对 one-to-one 的API进行解析
let cantMapApiList = [];
let canMapApiList = [];
oneToOneApiList.forEach(function(apiName) {
    let apiId = apiNameTransform(apiName);
    let clauseNode = document.getElementById(apiId);
    if (clauseNode === null) {
        cantMapApiList.push(apiName);
    } else {
        canMapApiList.push(apiName);
    }
});

logger.info("映射失败的API列表为：");
logger.info(cantMapApiList);

// 核心函数：输入 apiName，返回一个列表，其中元素是各个参数的对象
function getAllFunctionString(apiName) {

    var AllfunctionString = new Map();
    let coreApiFunctionString = getFunctionString(apiName, apiName);
    AllfunctionString.set('core', coreApiFunctionString);
    return AllfunctionString;

    function getFunctionString(apiName, apiNameBackup) {
        try {
            // 对 apiNameBackup进行处理，得到适当的名称
            // apiNameBackup可能有两种情况：
            // 1.被递归调用：那么不用变，传的一定是合法的名称；
            // 2.被直接调用：那么可能是有问题的名称，那么就要用一个临时的来代替：

            // 如何判断这是第几层调用：
            // 如果apiName与apiNameBackup相等，那么说明他是直接调用；
            // 假如不相等，说明是递归调用，这种情况下，我们就不再往深里走了；

            var apiId = apiNameTransform(apiName);
            logger.info("进入apiId：" + apiId);
            logger.info("进入apiName：" + apiName);

            let codeString = '';
            let parameterNameList = [];

            // 获取对应clause节点
            var clauseNode = document.getElementById(apiId);
            if (clauseNode === null) {
                throw new ApiTransformError('[FATAL]API名称到ID号的映射失败，请更新映射规则: ' + apiName);
            }

            // 解析出其中的参数列表 parameterNameList，包括可选参数和必须参数
            var titleNode = clauseNode.firstElementChild;
            titleNode.childNodes.forEach(function (node) {
                if (node.nodeName === 'VAR') {
                    parameterNameList.push(node.textContent);
                }
            });
            logger.info('解析出的参数列表为: ' + parameterNameList);

            // 获取到该clause中所有emu-alg节点和ul节点
            var emuNodes = [];
            var ulNodes = [];
            clauseNode.childNodes.forEach(function (node) {
                if (node.nodeName === 'EMU-ALG') {
                    emuNodes.push(node);
                }
                if (node.nodeName === 'UL'){
                    ulNodes.push(node);
                }
            });

            if (emuNodes.length === 0 && ulNodes.length === 0) {
                logger.error(`${apiNameBackup}中没有有效的内容节点.`);
            }

            // 遍历处理其中的每个emu-alg节点
            for (let i = 0; i < emuNodes.length; i++) {

                var olNode = emuNodes[i].querySelector('ol');

                // 获取其中的所有li节点，包括后代li节点（这一点一定要注意）
                var liNodes = olNode.querySelectorAll('li');

                if (apiName === apiNameBackup) {
                    // 3-31新增：在转化之前，需要遍历每一个liNode，寻找其内嵌函数，假如找到了，那么需要递归调用本function，将其转化为代码；
                    liNodes.forEach(function(liNode) {
                        let htmlChildNodes = liNode.children;
                        // 假如该子节点中有内嵌函数节点：emu-xref
                        for (let node of htmlChildNodes) {
                            if (node.tagName === 'EMU-XREF') {
                                // 从该节点中解析出apiId和apiName
                                let _apiId = node.querySelector('a').getAttribute('href').split('#')[1];
                                let _apiName = getText(node.querySelector('a'));

                                // 只有当该apiId没有被处理过时，才处理（先不这样）
                                // if (!stringExists(_apiId, parsedApiNamesList)) {
                                //     // 这里会自动地set进去
                                //     getFunctionString(_apiId, _apiName);
                                // }
                                getFunctionString(_apiId, _apiName);

                            }
                        }

                    });
                }

                // 核心逻辑，递归地逐句翻译；
                // 先将第一个li节点直接加入到结果中
                codeString += textToCode(liNodes[0]);
                let brace = 0;

                // 核心算法：遍历li节点，逐条转化为代码。以最大为4的滑动窗口来判断节点间的父子关系，以添加适当的 '{' 和 '}' 符号
                for (let j = 1; j < liNodes.length; j++) {

                    let previousNode = liNodes[j - 1];
                    let nowNode = liNodes[j];
                    let behindNode = nowNode;
                    if ((j + 1) < liNodes.length) {
                        behindNode = liNodes[j + 1];
                    }
                    let statementString = textToCode(nowNode);

                    if (j === (liNodes.length - 1)) {
                        var right_brace = "";
                        if (brace !== 0) {
                            for (var ii = 0; ii < brace; ii++) {
                                right_brace += "}\n";
                            }
                        }
                        codeString += statementString;
                        codeString += right_brace;
                        continue;
                    }

                    // 情况1：前后两个节点是兄弟节点，那么不添加括号
                    if (nowNode.parentNode.isSameNode(previousNode.parentNode)) {
                        // console.log('是兄弟');
                        // codeString += statementString;
                    }
                    // 情况2：后一个发生了缩进
                    else if (nowNode.parentNode.parentNode.isSameNode(previousNode)) {
                        // console.log('发生缩进');
                        codeString += '{\n';
                        brace += 1;
                        // codeString += statementString;
                    }
                    // 情况3：缩进回收
                    if (nowNode.parentNode.parentNode.parentNode.isSameNode(behindNode.parentNode)) {
                        codeString += statementString;
                        codeString += '}\n';
                        brace -= 1;
                        // codeString += statementString;
                    } else if (nowNode.parentNode.parentNode.parentNode.parentNode.parentNode.isSameNode(behindNode.parentNode)) {
                        // console.log('缩进回收');
                        codeString += statementString;
                        codeString += '}\n}\n';
                        brace -= 2;
                        // codeString += statementString;
                    } else if (nowNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.isSameNode(behindNode.parentNode)) {
                        codeString += statementString;
                        codeString += '}\n}\n}\n';
                        brace -= 3;
                        // codeString += statementString;
                    } else if (nowNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.isSameNode(behindNode.parentNode)) {
                        codeString += statementString;
                        codeString += '}\n}\n}\n}\n';
                        brace -= 4;
                        // codeString += statementString;
                    } else {
                        codeString += statementString;
                    }
                }
            }

            // 遍历处理其中的每个ul节点
            for(let i = 0; i < ulNodes.length; i++){
                let liNodes = ulNodes[i].querySelectorAll('li');

                for (let j = 0; j < liNodes.length; j++){
                    let statementString = textToCode(liNodes[j]);
                    codeString += statementString;
                }
            }

            if (!(codeString === '')) {
                // 包裹成函数，填入参数
                let parameterString = parameterNameList.join(', ');
                let functionString =
                    `var ${apiNameBackup} = function (that, ${parameterString}) {\n\n${codeString}\n};`;  // 注意这里的that

                AllfunctionString.set(apiNameBackup, functionString);
                logger.info('解析出的functionString为: ' + functionString);
                // 返回的重新构造一下，用temp代替掉名称，因为在递归调用中，返回值不会被用到；
                // 只有当最后一次递归，即结束时，才会将core函数的返回值插入到结果集中，这时由于传入的apiName可能有
                // 问题，所以采用temp替换掉它；
                functionString =
                    `var temp = function (that, ${parameterString}) {\n\n${codeString}\n};`;  // 注意这里的that
                // parsedApiNamesList.push(apiId);
                return functionString;
            }
        } catch (e) {
            console.error(`[ERROR] ${apiName} 解析成代码时存在异常:` + e.name + e.message);
            return '';
        }
    }
}

// 开始依次查找边界条件
let resultSet = {};  // 保存的结果集，以对象形式
canMapApiList.forEach(function(apiName) {
    logger.info(`*****************************************************`);
    logger.info(`当前处理的API是: ${apiName}`);
    resultSet[`${apiName}`] = getBoundaryConditions(getAllFunctionString(apiName), apiName);
    logger.info(`${apiName}解析完毕.`);
    logger.info(`*****************************************************`);
});

// 将无法解析的api名称的结果也加入resultSet，用 [] 表示
cantMapApiList.forEach(function(apiName) {
    resultSet[`${apiName}`] = [];
});

// 统计一下结果集的个数是否与API数目一致
console.assert(Object.getOwnPropertyNames(resultSet).length === oneToOneApiList.length, `结果集的总数目不对.`);
// 第二部分，对 one-to-many 的API进行解析

let oneToManyApiList = Object.getOwnPropertyNames(oneToManyApiObject);
oneToManyApiList.forEach(function(apiName) {
    resultSet[apiName] = {};
    let optionalValuesList = oneToManyApiObject[apiName];
    for(let value of optionalValuesList) {
        let newApiName = `${apiName}-${value}`;
        resultSet[apiName][value] = getBoundaryConditions(getAllFunctionString(newApiName), newApiName);
    }
});

// 将 resultSet写入文件
let resultFilePath = path.join(__dirname, targetPath);
fs.writeFile(resultFilePath, JSON.stringify(resultSet), err => {
    if(!err) logger.info(`解析成功，结果文件存放在 ${resultFilePath}`);
});
