// 导入基础正则
let {Var, Num, End} = require('./baseRegex');

// 定义append开头的句式的映射规则

var appendRegexPatternMap = new Map();
appendRegexPatternMap.set(
    new RegExp(`^Append ${Var} to the end of ${Var}${End}$`, 'i'),
    '{%2%}.push({%1%});\n'
);

exports.appendRegexPatternMap = appendRegexPatternMap;

