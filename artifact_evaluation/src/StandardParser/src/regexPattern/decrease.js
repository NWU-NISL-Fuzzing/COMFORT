// 导入基础正则
let {Var, Num, End} = require('./baseRegex');

// 定义Decrease开头的句式的映射规则
var decreaseRegexPatternMap = new Map();
decreaseRegexPatternMap.set(
    new RegExp(`^Decrease ${Var} by ${Num}${End}$`, 'i'),
    '{%1%} -= {%2%};\n'
    );

exports.decreaseRegexPatternMap = decreaseRegexPatternMap;
