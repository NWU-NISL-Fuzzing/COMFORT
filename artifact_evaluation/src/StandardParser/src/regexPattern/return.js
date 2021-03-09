// 导入基础正则
let {Var, Func, Num, Mark, End, Con} = require('./baseRegex');

// 定义Return开头的句式的映射规则
var returnRegexPatternMap = new Map();

returnRegexPatternMap.set(
    // return the empty string.
    new RegExp(`^[Rr]eturn the empty String ("")*${End}$`, 'i'),
    // /^Return the empty string\.$/i,
    "return '';\n"
);

returnRegexPatternMap.set(
    // return the empty string.
    new RegExp(`^Return Call\\(${Var}, ${Var}, \\[([a-zA-Z0-9_$, ]+)\\]\\)${End}$`, 'i'),
    // /^Return the empty string\.$/i,
    "return {%1%}({%2%}, {%3%});\n"
);

returnRegexPatternMap.set(
    //return the String "NaN"
    new RegExp(`^return the String ("[a-zA-Z0-9_$-]+?")`, 'i'),
    "return {%1%};\n"
);

returnRegexPatternMap.set(
    //Return the value of the [[DateValue]] internal slot of this Date object.
    new RegExp(`^return the value of the ${Var} internal slot of this ${Var} object`, 'i'),
    "return this.{%1%};\n"
);

returnRegexPatternMap.set(
    // Return ? PerformEval(x, calleeRealm, false, false).
    new RegExp(`^Return ${Func}${End}$`, 'i'),
    // /^Return ([!?\s])*([a-zA-Z0-9$_ ()\[\].,"@]+?)\.$/i,
    'return {%1%};\n'
    );

exports.returnRegexPatternMap = returnRegexPatternMap;