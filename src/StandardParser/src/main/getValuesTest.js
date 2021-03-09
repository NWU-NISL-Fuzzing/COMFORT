const path = require("path");
const fs = require("fs");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
let {apiNameTransform} = require('./utils');

// 读取边界条件分析函数
let {getBoundaryConditions} = require('./boundaryAnalysis');

// 读取自定义异常类型
let {ApiTransformError} = require('./error');

// 读取核心的映射函数
let {textToCode} = require('./textToCode');

// 加载 document
console.log('正在加载document，请稍等...');
console.time('getDocument');
let htmlString = fs.readFileSync(path.join(__dirname, '../../resources/ES10-standard.html')).toString();
const dom = new JSDOM(htmlString);
let document = dom.window.document;
console.timeEnd('getDocument');

// 核心函数：输入 apiName，返回一个列表，其中元素是各个参数的对象
function getApiValues(apiName) {

    try {
    var apiId = apiNameTransform(apiName);
    let codeString = '';
    let parameterNameList = [];

    // 获取对应clause节点
    var clauseNode = document.getElementById(apiId);
    if (clauseNode === null) {
        throw new ApiTransformError('[FATAL]API名称到ID号的映射失败，请更新映射规则:' + apiName);
    }

    // 解析出其中的参数列表 parameterNameList，包括可选参数和必须参数
    var titleNode = clauseNode.firstElementChild;
    console.assert(titleNode.nodeName === 'H1', '[ERROR]解析参数列表错误，该条目中第一个节点不是H1.');
    titleNode.childNodes.forEach(function (node) {
        if (node.nodeName === 'VAR') {
            parameterNameList.push(node.textContent);
        }
    });

    // 获取到该clause中第一个emu-alg下的第一个ol节点
    // TODO:增强鲁棒性：处理掉Math.cos这类不用 emu-alg 包裹的节点
    // TODO:一个api下可能包含多个emu-alg节点，如Array.prototype.sort
    var olNode = clauseNode.querySelector('emu-alg').querySelector('ol');

    // 获取其中的所有li节点，包括后代li节点（这一点一定要注意）
    var liNodes = olNode.querySelectorAll('li');

    // 核心逻辑，递归地逐句翻译；
    // 先将第一个li节点直接加入到结果中
    codeString += textToCode(liNodes[0]);
    // 内嵌函数检测


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

        if (j === (liNodes.length -1) ){
            var right_brace = "";
            if (brace !== 0){
                for (var ii = 0; ii<brace; ii++){
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

    // TODO:对 codeString 进行第二遍处理，主要是解决内嵌函数的问题

    // 包裹成函数，填入参数
    let parameterString = parameterNameList.join(', ');
    let functionName = 'TempFunctionName';
    let functionString =
        `var ${functionName} = function (that, ${parameterString}) {\n\n${codeString}\n};`;  // 注意这里的that

    console.log(functionString);
    // 调用 esprima 分析边界条件
    return getBoundaryConditions(functionString, apiName);

    } catch (e) {
        console.error(`[ERROR] ${apiName} 解析成代码时存在异常:` + e.name + e.message);
        return [];
    }
}

let result = getApiValues('sec-object.defineproperties');
console.log(result);