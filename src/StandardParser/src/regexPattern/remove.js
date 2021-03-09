// 导入基础正则
let {Var, End} = require('./baseRegex');

// 定义Remove开头的句式的映射规则

var removeRegexPatternMap = new Map();
removeRegexPatternMap.set(
    new RegExp(`^Remove the first element from ${Var} and let ${Var} be the value of the element${End}`, 'i'),
    'var {%2%} = {%1%}.shift();\n'
    );


exports.removeRegexPatternMap = removeRegexPatternMap;

