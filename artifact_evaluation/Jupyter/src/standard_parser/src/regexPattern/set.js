// 导入基础正则
let {Var, Func, Mark, End} = require('./baseRegex');

// 定义Set开头的句式的映射规则

var setRegexPatternMap = new Map();

setRegexPatternMap.set(
    // Set R to the string-concatenation of R and next.
    new RegExp(`^Set ${Var}\\.${Var} to empty${End}$`, 'i'),
    '{%1%}.{%2%} = "";\n'
);

setRegexPatternMap.set(
    // Set R to the string-concatenation of R and next.
    new RegExp(`^Set ${Var} to the string-concatenation of ${Var} and ${Var}${End}$`, 'i'),
    '{%1%} = {%2%} + {%3%};\n'
    );

setRegexPatternMap.set(
    // Set PropertyList to a new empty List.
    new RegExp(`^Set ${Var} to a new empty List${End}$`, 'i'),
    '{%1%} = [];\n'
    );

setRegexPatternMap.set(
    // Set the [[DateValue]] internal slot of this Date object to NaN.
    new RegExp(`^Set the ${Var} internal slot of this ${Var} object to ${Var}${End}$`, 'i'),
    'this.{%1%} = {%3%};\n'
);


setRegexPatternMap.set(
    // 一定要注意这里！！！用 '\s?' 来匹配HTML中的 '?&nbsp;' ，因为无法直接用空格来匹配实体&nbsp;
    // Set C to ? Get(C, @@species).
    new RegExp(`^Set ${Var} to ${Mark}${Func}${End}$`, 'i'),
    // /^set ([a-zA-Z0-9$_]+?) to ([!?\s])*([a-zA-Z0-9$_ ()\[\].,"@]+?)[.]*$/i,
    '{%1%} = {%3%};\n'
    );

exports.setRegexPatternMap = setRegexPatternMap;

