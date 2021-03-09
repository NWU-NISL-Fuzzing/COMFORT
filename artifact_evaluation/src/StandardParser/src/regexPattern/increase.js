// 导入基础正则
let {Var, Num, End} = require('./baseRegex');

// 定义increase开头的句式的映射规则

var increaseRegexPatternMap = new Map();
increaseRegexPatternMap.set(
    new RegExp(`^Increase ${Var} by ${Num}${End}$`, 'i'),
    '{%1%} += {%2%};\n'
    );

increaseRegexPatternMap.set(
    new RegExp(`^Increase ${Var} by ${Num}${End}$`, 'i'),
    '{%1%} += {%2%};\n'
);
exports.increaseRegexPatternMap = increaseRegexPatternMap;

