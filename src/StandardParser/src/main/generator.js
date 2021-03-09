/*
    filename: generator.js
    author: ty
    date: 2020-3-23
    description: 多种数据类型的随机参数生成器, 覆盖六种类型：Number、String、Boolean、Undefined、Null、Object（分为list和普通）
    note:
 */

// 获取一个随机字符串，有两种策略：
// 1.获取一个基于经验的字符串（即曾经触发过bug的较为特殊的字符串）
// 2.获取一个随机字符串（可选参数：字符串的最大长度（而非指定长度），默认为32）
function stringGenerator(maxLength) {

    function getExperiencedString() {
        let experiencedStringsList = ['%ED%AF%BF', '0', '-', ''];
        return getARandomElementFromAList(experiencedStringsList);
    }
    function getRandomString(maxLength) {
        // 先随机生成一个0-32的整数，作为生成字符串长度
        maxLength = maxLength || 32;
        let strLength = Math.floor(Math.random() * (maxLength+1));    // 可均衡获取 0 到 9 的随机整数

        // 候选字符
        let $chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890~!@#$%^&*()_+<>?`';

        // 随机选择
        let maxPos = $chars.length;
        let pwd = '';
        for (i = 0; i < strLength; i++) {
            pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
        }
        return pwd;
    }

    return getARandomElementFromAList([getExperiencedString(), getRandomString()]);
}

// 获取一个随机生成的Number值。接受两个参数，即传入值的范围，默认 0 ~ 2^20
// TODO:思考，关于小数值该如何做？
function numberGenerator(minValue, maxValue) {
    maxValue = maxValue || Math.pow(2, 20);
    minValue = minValue || 0;

    return parseInt(Math.random() * (maxValue - minValue + 1) + minValue, 10);
}

// 获取一个随机生成的布尔值
function booleanGenerator() {
    return Boolean(Math.round(Math.random()));
}

// 获取 undefined
function undefinedGenerator() {
    return undefined;
}

// 获取 null
function nullGenerator() {
    return null;
}

// 获取一个随机生成的对象（可能是列表对象，可能是普通对象）
function objectGenerator() {
    return getARandomElementFromAList([listGenerator(), ordinaryObjectGenerator()]);
}

// 获取一个随机生成的列表（对象的一种），目前列表中的元素可能是其他5种类型，加上空列表
// TODO: 列表的元素
function listGenerator() {
    // 先随机生成一个整数作为列表长度
    let listLength = numberGenerator(0, 100);
    let resultList = [];
    // 向列表中填充随机元素
    for (let i = 0; i < listLength; i++) {
        resultList.push(getARandomElementFromAList(
            [[], numberGenerator(), stringGenerator(), booleanGenerator(), nullGenerator(), undefinedGenerator()]));
    }
    return resultList;
}

// 获取一个随机生成的普通对象（对象的一种），对象的key是字符串，value可能是其他五种类型，加上空列表
function ordinaryObjectGenerator() {
    // 先随机生成一个整数作为对象的属性个数
    let listLength = numberGenerator(0, 100);
    let resultObject = {};
    // 向里面设置随机属性
    for (let i = 0; i < listLength; i++) {
        let key = getARandomElementFromAList([stringGenerator(), numberGenerator()]);
        resultObject[`${key}`] = getARandomElementFromAList(
            [[], stringGenerator(), numberGenerator(), booleanGenerator(), nullGenerator(), undefinedGenerator()]);
    }
    return resultObject;
}

function functionGenerator() {
    return function() {};
}

// 从一个列表中获取等概率地随机取一个元素, 与上面的生成器搭配使用
function getARandomElementFromAList(valuesList) {
    let listLength = valuesList.length;
    return valuesList[Math.floor(Math.random() * listLength)];
}



// 导出函数
exports.stringGenerator = stringGenerator;
exports.numberGenerator = numberGenerator;
exports.booleanGenerator = booleanGenerator;
exports.undefinedGenerator = undefinedGenerator;
exports.nullGenerator = nullGenerator;
exports.objectGenerator = objectGenerator;
exports.functionGenerator = functionGenerator;
exports.getARandomElementFromAList = getARandomElementFromAList;
