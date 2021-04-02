// 导入基础正则
let {Var, Num, End} = require('./baseRegex');

// 定义throw开头的子句
var throwRegexPatternMap = new Map();
throwRegexPatternMap.set(
    new RegExp(`^[tT]hrow a ([a-zA-Z]+?) exception${End}$`, 'i'),
    'throw new {%1%}();\n'
    );

exports.throwRegexPatternMap = throwRegexPatternMap;
