// 导入基础正则
let {Var, Func, Num, End, Op, Con, Mark,op_trans} = require('./baseRegex');

// 定义Else开头的句式的映射规则
var varAndExpression = '([a-zA-Z0-9\\(\\)\\[, \\-+]+?)';

var elseRegexPatternMap = new Map();

elseRegexPatternMap.set(
    // Else if O is a String exotic object
    new RegExp(`^Else if ${Var} is a String exotic object${End}$`, 'i'),
    'else if (typeof {%1%} === "string")\n'
);

elseRegexPatternMap.set(
    // else if itemKind is "value"
    new RegExp(`^Else if ${Var} is "${Var}"${End}$`, 'i'),
    'else if ({%1%} === "{%2%}")\n'
);

elseRegexPatternMap.set(
    // Else if space has a [[StringData]] internal slot
    new RegExp(`^Else if ${Var} has (?:a|an) ${Var} internal (?:slot|method)${End}$`, 'i'),
    'else if ({%1%}.{%2%} !== null)\n'
);

elseRegexPatternMap.set(
    // Else (if) both lowerExists and upperExists are false.
    new RegExp(`^Else (?:if )*${Func} and ${Func} have different results$`, 'i'),
    'else if ({%1%} !== {%2%})\n'
);

elseRegexPatternMap.set(
    // Else base must be an Environment Record.
    new RegExp(`^Else return ["]*${Con}["]*${End}`, 'i'),
    'else {\n return {%1%};\n}\n'
);
elseRegexPatternMap.set(
    // Else if Type(O) is Number,
    new RegExp(`^Else if Type\\(${Var}\\) is Number${End}$`, 'i'),
    'else if (typeof {%1%} === "number")\n'
);

elseRegexPatternMap.set(
    // Else if Type(O) is not Number,
    new RegExp(`^Else if Type\\(${Var}\\) is not Number${End}$`, 'i'),
    'else if (typeof {%1%} !== "number")\n'
);
elseRegexPatternMap.set(
    // Else if Type(O) is Object,
    new RegExp(`^Else if Type\\(${Var}\\) is Object${End}$`, 'i'),
    'else if (typeof {%1%} === "object")\n'
    );

elseRegexPatternMap.set(
    // Else if Type(O) is not Object,
    new RegExp(`^Else if Type\\(${Var}\\) is not Object${End}$`, 'i'),
    'else if (typeof {%1%} !== "object")\n'
    );
elseRegexPatternMap.set(
    // Else if Type(O) is String,
    new RegExp(`^Else if Type\\(${Var}\\) is String${End}$`, 'i'),
    'else if (typeof {%1%} === "string")\n'
    );

elseRegexPatternMap.set(
    // Else if Type(O) is not String,
    new RegExp(`^Else if Type\\(${Var}\\) is not String${End}$`, 'i'),
    'else if (typeof {%1%} !== "string")\n'
    );

elseRegexPatternMap.set(
    // Else base must be an Environment Record.
    new RegExp(`^Else ${Var} is not present${End}$`, 'i'),
    'else if ({%1%} !== undefined) \n'
);

elseRegexPatternMap.set(
    // Else base must be an Environment Record.
    new RegExp(`^Else ${Var} (?:must be|is) (?:a|an)* ((\\w|\\s)+)${End}$`, 'i'),
    'else if ({%1%} === {%2%})\n'
);

elseRegexPatternMap.set(
    // Else (if) both lowerExists and upperExists are false.
    new RegExp(`^Else (?:if )*${Func} and ${Func} are both ${Con}$`, 'i'),
    'else if ({%1%} === {%3%} && {%2%} === {%3%})\n'
);

elseRegexPatternMap.set(
    // Else both lowerExists and upperExists are false.
    new RegExp(`^Else both ${Var} and ${Var} are ${Con}$`, 'i'),
    'else if ({%1%} === {%3%} && {%2%} === {%3%} )\n'
);

elseRegexPatternMap.set(
    // Else if lowerExists is false and upperExists is true.
    new RegExp(`^Else if ${Var} is ${Con} and ${Var} is ${Con}$`, 'i'),
    'else if ({%1%} === {%2%} && {%3%} === {%4%} )\n'
);

elseRegexPatternMap.set(
    // Else,
    new RegExp(`^Else${End}$`, 'i'),
    'else\n'
    );

elseRegexPatternMap.set(
    // Else fromPresent is false,
    new RegExp(`^Else (?:if )*${Var} is ${Con}$`, 'i'),
    'else if ( {%1%} === {%2%} )'
    );

elseRegexPatternMap.set(
    // Else fromPresent is false,
    new RegExp(`^Else (?:if )*${Var} is not ${Con}$`, 'i'),
    'else if ( {%1%} !== {%2%} )'
);

elseRegexPatternMap.set(
    // .......; else let to be min(relativeTarget, len).
    new RegExp(`^else let ${Var} be ${Mark}${varAndExpression}${End}$`, 'i'),
    'else { var {%1%} = {%3%}; }\n'
    );

elseRegexPatternMap.set(
    // Else,
    new RegExp(`^Else (?:if) ${Var} ${Op} ${Var}$`, 'i'),
    //'else ({%1%}' + op_trans('{%2%}') + ' {%3%})\n'
    'else if ( {%1%} {%2%} {%3%} )\n'
);

elseRegexPatternMap.set(
    // Else if the number of actual arguments is 1
    new RegExp(`^Else if ${Func} is ${Var}$`, 'i'),
    'else if ( {%1%} === {%2%} )\n'
);

exports.elseRegexPatternMap = elseRegexPatternMap;
