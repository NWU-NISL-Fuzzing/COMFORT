// 加载各类pattern
let {letRegexPatternMap} = require('../regexPattern/let');
let {assertRegexPatternMap} = require('../regexPattern/assert');
let {decreaseRegexPatternMap} = require('../regexPattern/decrease');
let {increaseRegexPatternMap} = require('../regexPattern/increase');
let {elseRegexPatternMap} = require('../regexPattern/else');
let {performRegexPatternMap} = require('../regexPattern/perform');
let {removeRegexPatternMap} = require('../regexPattern/remove');
let {repeatRegexPatternMap} = require('../regexPattern/repeat');
let {returnRegexPatternMap} = require('../regexPattern/return');
let {setRegexPatternMap} = require('../regexPattern/set');
let {ifRegexPatternMap} = require('../regexPattern/if');
let {throwRegexPatternMap} = require('../regexPattern/throw');
let {appendRegexPatternMap} = require('../regexPattern/append');
let {apiNameHardEncoding} = require('../../resources/apiNameHardEncoding');

// 将姚厚友给的API名称，转化为ES标准中对应的ID号
function apiNameTransform(apiName) {

    // 便于调试，允许直接传入id（id都是以 sec-开头的）
    if (apiName.startsWith('sec-')) {
        return apiName;
    }

    // 先查硬编码映射表，假如能查到，就直接返回
    if (apiNameHardEncoding[`${apiName}`] !== undefined) {
        return apiNameHardEncoding[`${apiName}`];
    }

    // 假如硬编码表中没查到，就走我们的通用映射规则
    else {
    apiName = apiName.trim();
    apiName = apiName.replace('()', '');
    apiName = apiName.toLowerCase();
    apiName = 'sec-' + apiName;
    return apiName;
    }
}

// 将pattern映射成代码
function mapRegexToString(regexResult, formatString) {
    for(var i = 1; i < regexResult.length; i++) {
        formatString = formatString.replace(new RegExp(`{%${i}%}`, 'g'), String(regexResult[i]));
    }
    return formatString;
}

// 判断text的文本类型，并返回两个值：类型和pattern
function choosePattern(text) {
    if (/^assert[\s\S]*$/i.test(text)) {
        return ['assert', assertRegexPatternMap];
    }
    if (/^decrease[\s\S]*$/i.test(text)) {
        return ['decrease', decreaseRegexPatternMap];
    }
    if (/^increase[\s\S]*$/i.test(text)) {
        return ['increase', increaseRegexPatternMap];
    }
    if (/^else[\s\S]*$/i.test(text)) {
        return ['else', elseRegexPatternMap];
    }
    if (/^let[\s\S]*$/i.test(text)) {
        return ['let', letRegexPatternMap];
    }
    if (/^perform[\s\S]*$/i.test(text)) {
        return ['perform', performRegexPatternMap];
    }
    if (/^remove[\s\S]*$/i.test(text)) {
        return ['remove', removeRegexPatternMap];
    }
    if (/^repeat[\s\S]*$/i.test(text)) {
        return ['repeat', repeatRegexPatternMap];
    }
    if (/^return[\s\S]*$/i.test(text)) {
        return ['return', returnRegexPatternMap];
    }
    if (/^set[\s\S]*$/i.test(text)) {
        return ['set', setRegexPatternMap];
    }
    if (/^throw[\s\S]*$/i.test(text)) {
        return ['throw', throwRegexPatternMap];
    }
    if (/^if[\s\S]*$/i.test(text)) {
        return ['if', ifRegexPatternMap];
    }
    if (/^append[\s\S]*$/i.test(text)) {
        return ['append', appendRegexPatternMap];
    }
    return ['null', {}]
}

// 对翻译过来的代码进行标准化（因为ES文本描述和JS代码存在区别）
function normalize(text) {

    // 1.将描述的符号改为JS语法中的符号
    text = text.replace(/≥/g, '>=').replace(/≤/g, '<=').replace(/≠/g, '!==');

    // 2.将 `this value` 替换为 `this`
    text = text.replace(/this value/g, 'that');

    // 3.将 `指数` 进行替换
    text = text.replace(/28/g, `${Math.pow(2, 8)}`);
    text = text.replace(/215/g, `${Math.pow(2, 15)}`);
    text = text.replace(/216/g, `${Math.pow(2, 16)}`);
    text = text.replace(/221/g, `${Math.pow(2, 21)}`);
    text = text.replace(/231/g, `${Math.pow(2, 31)}`);
    text = text.replace(/232/g, `${Math.pow(2, 32)}`);
    text = text.replace(/252/g, `${Math.pow(2, 52)}`);
    text = text.replace(/253/g, `${Math.pow(2, 53)}`);
    text = text.replace(/1021/g, `${Math.pow(10, 21)}`);
    text = text.replace(/1032/g, `${Math.pow(10, 32)}`);

    // 4.将 `the empty String` 替换为 `''`
    text = text.replace(/the empty String/ig, "''");

    // 5.将 `@` 符号去掉
    text = text.replace(/@/g, '');

    return text;
}

// 传入li节点，仅获取该行的文本描述
function getText(node) {
    var s = '';
    node.childNodes.forEach(function(node) {
    if (node.tagName !== 'OL') {
        s += node.textContent;
    }
    });

    // 进行适当的规范化：
    s = s.trim();  // 去除两端空格
    s = s.replace(/[?!]/g, '');  // 去掉函数中可能出现的 ? 和 ！
    s = s.replace(/\s+/g, ' ');  // 将换行等长空格，统一为一个空白符
    s = s.replace(new RegExp(String.fromCodePoint(160), 'g'), '');  // 去掉 '&nbsp;'

    return s;
}

// 判断一个节点是否包含 OL 类型的直接子节点
function hasOlChildNodes(node) {
    let flag = false;
    for(let i = 0; i < node.childNodes.length; i++) {
        if (node.childNodes[i].tagName === 'OL') {
            flag = true;
        }
    }
    return flag;
}

// 将语句（确切地说是If语句）进行分句，返回子句的列表
function splitStatement(text) {
    let count = 0;
    let trueCommaIndex = [-1];
    for(let i = 0; i < text.length; i++) {
        if (text[i] === ';') {
            trueCommaIndex.push(i);
        } else if (text[i] === '(') {
            count += 1;
        } else if (text[i] === ')'){
            count -= 1;
        } else if (text[i] === ',') {
            if (count === 0) {
                trueCommaIndex.push(i);
            } else {
            }
        } else {}
    }
    trueCommaIndex.push(text.length);
    // 拆分成子句
    let clauseSet = [];
    for (let i = 0; i < trueCommaIndex.length; i++) {
        if (i+1 < trueCommaIndex.length) {
            clauseSet.push(text.substring(trueCommaIndex[i] + 1, trueCommaIndex[i+1]).trim())
        }
    }
    return clauseSet;
}

// 查询一个字符串是否在一个字符串列表里
function stringExists(str, strList) {
    return strList.indexOf(str) !== -1;
}

// list去重
// 注意：这里只去除6种基本类型的重复，对于 function 或者 object 不行（也不需要对它们去重）
function deduplicate(arr) {
    let newSet = new Set(arr);
    return Array.from(newSet);
}

// 只保留list中的数值类型的值
function reserveNumber(arr) {
    let newArr = [];
    for (let element of arr) {
        if (typeof element === 'number') {
            newArr.push(element);
        }
    }
    return newArr;
}

// 生成范围内的随机整数，左开右开区间
function getRandomNumberByGivenRange(min, max) {
    let temp = Math.floor(Math.random()*(max-min+1)+min);
    if (temp === min) {
        temp += 1;
    }
    if (temp === max) {
        temp -= 1;
    }
    return temp
}

// 整数list从小到大排序
function sort(arr) {
    arr.sort(function (x, y) {  // [ 1, 2, 10, 20 ]
        if (x > y) {
            return 1;
        }
        if (x < y) {
            return -1;
        }
        return 0;
    });
    return arr;
}

// 利用 Object.prototype.toString.call 准确判断传入变量的类型并返回
function getType(value) {
    let pattern1 = /^\[.*? ([a-z]+?)]$/i;
    let type = Object.prototype.toString.call(value);
    return pattern1.exec(type)[1].toLowerCase();
}

exports.apiNameTransform = apiNameTransform;
exports.mapRegexToString = mapRegexToString;
exports.choosePattern = choosePattern;
exports.normalize = normalize;
exports.getText = getText;
exports.hasOlChildNodes = hasOlChildNodes;
exports.splitStatement = splitStatement;
exports.stringExists = stringExists;
exports.deduplicate = deduplicate;
exports.reserveNumber = reserveNumber;
exports.getRandomNumberByGivenRange = getRandomNumberByGivenRange;
exports.sort = sort;
exports.getType = getType;

// 测试模块
// let apiName1 = 'Number.prototype.tostring';
// let apiName2 = 'Symbol';
// let apiName3 = 'TypedArray.prototype.copyWithin';
//
// console.log(apiNameTransform(apiName3));


// 测试 getType
// console.log(getType(1));
// console.log(getType('1'));
// console.log(getType(true));
// console.log(getType({}));
// console.log(getType(null));
// console.log(getType(undefined));
// console.log(getType([]));
// console.log(getType(function(){}));

// 测试 deduplicate
// console.log(deduplicate([123, NaN, NaN, null, null, undefined, undefined]));
// console.log(deduplicate([123, 123, {}, {}, function(){}, function(){}, NaN, NaN, null, null, undefined, undefined, Infinity, -Infinity]))
// console.log(deduplicate(['abc', 'abc', true, true]));
