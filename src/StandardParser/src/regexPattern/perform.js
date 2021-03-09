// 导入基础正则
let {Func, End, Mark} = require('./baseRegex');

// 定义Perform开头的句式的映射规则

var performRegexPatternMap = new Map();
performRegexPatternMap.set(
    // Perform ? DefinePropertyOrThrow(O, P, desc).
    new RegExp(`^Perform ${Mark}${Func}${End}$`, 'i'),
    '{%2%};\n'
    );


exports.performRegexPatternMap = performRegexPatternMap;

