// 导入基础正则
let {Var, Func, Num, End, Mark, Con} = require('./baseRegex');

// 定义Let开头的句式的映射规则

var letRegexPatternMap = new Map();

letRegexPatternMap.set(
    // Let c be the code unit at index k within string.
    new RegExp(`^Let ${Var} be the code unit at index ${Var} within ${Var}${End}$`, 'i'),
    'var {%1%} = {%3%}.charAt({%2%});\n'
);

letRegexPatternMap.set(
    // Let n be the numeric value of char.
    new RegExp(`^Let ${Var} be the numeric value of ${Var}${End}$`, 'i'),
    'var {%1%} = parseInt({%2%});\n'
);

letRegexPatternMap.set(
    // Let entries be the List that is M.[[MapData]]
    new RegExp(`^Let ${Var} be the list that is ${Var}\\.${Var}${End}$`, 'i'),
    'var {%1%} = {%2%}.{%3%};\n'
);

letRegexPatternMap.set(
    // Let x be the number of elements in items.
    new RegExp(`^Let ${Var} be the number of elements in ${Var}${End}$`, 'i'),
    'var {%1%} = {%2%}.length;\n'
);

letRegexPatternMap.set(
    // Let kValue be the first element of values and remove that element from values.
    new RegExp(`^Let ${Var} be the first element of ${Var} and remove that element from ${Var}${End}$`, 'i'),
    'var {%1%} = {%2%}.shift();\n'
);

letRegexPatternMap.set(
    // Let codeUnits be a List containing the arguments passed to this function.
    new RegExp(`^Let ${Var} be a List containing the arguments passed to this function${End}$`, 'i'),
    'var {%1%} = arguments;\n'
);

letRegexPatternMap.set(
    // Let size be the number of code units in S.
    // code units:每个16位二进制表示一个代码单元(code unit)，先简单理解为 length 吧
    new RegExp(`^Let ${Var} be the number of code units in ${Var}${End}$`, 'i'),
    'var {%1%} = {%2%}.length;\n'
);

letRegexPatternMap.set(
    // Let items be a List whose first element is O and whose subsequent elements are, in left to right order, the arguments that were passed to this function invocation.
    new RegExp(`^Let ([a-z]+?) be a List whose first element is ([a-z]+?) and whose subsequent elements are, in left to right order, the arguments that were passed to this function invocation\.$`, 'i'),
    'var {%1%} = [{%2%}];\nfor (let argument of arguments) { {%1%}.push(argument);}\n'
);


letRegexPatternMap.set(
    // Let items be a List whose elements are, in left to right order, the arguments that were passed to this function invocation.
    new RegExp(`^Let ([a-z]+?) be a List whose elements are, in left to right order, the arguments that were passed to this function invocation\.$`, 'i'),
    'var {%1%} = [];\nfor (let argument of arguments) { {%1%}.push(argument);}\n'
);

letRegexPatternMap.set(
    // Let x be 1.
    new RegExp(`^Let ${Var} be ${Func} minus ${Var}${End}$`, 'i'),
    'var {%1%} = {%2%} - {%3%};\n'
);

letRegexPatternMap.set(
    // Let x be 1.
    new RegExp(`^Let ${Var} be ${Num}${End}$`, 'i'),
    'var {%1%} = {%2%};\n'
    );

letRegexPatternMap.set(
    // Let R be the empty String.
    new RegExp(`^Let ${Var} be the empty String${End}$`, 'i'),
    'var {%1%} = "";\n'
    );


letRegexPatternMap.set(
    // Let s be the length of S.
    new RegExp(`^Let ${Var} be the length of ${Var}${End}$`, 'i'),
    'var {%1%} = {%2%}.length;\n'
    );

letRegexPatternMap.set(
    // Let func be the this value.
    new RegExp(`^Let ${Var} be the this value\.$`, 'i'),
    'var {%1%} = that;\n'
    );

letRegexPatternMap.set(
    // Let argList be a new empty List.
    new RegExp(`^Let ${Var} be a new empty List\.$`, 'i'),
    'var {%1%} = [];\n'
    );

letRegexPatternMap.set(
    // Let PropertyList and ReplacerFunction be undefined.
    new RegExp(`^Let ${Var} and ${Var} be ${Con}${End}$`, 'i'),
    'var {%1%} = {%3%};\nvar {%2%} = {%3%};\n'
    );

// letRegexPatternMap.set(
//     // Let x be ?&nbsp;thisNumberValue(this value).
//     new RegExp(`^Let ${Var} be \\? ${Func}${End}$`, 'i'),
//     'var {%1%} = ReturnIfAbrupt({%2%});\n'
//     );
//
// letRegexPatternMap.set(
//     // Let x be !&nbsp;thisNumberValue(this value).
//     new RegExp(`^Let ${Var} be ! ${Func}${End}$`, 'i'),
//     'var {%1%} = {%2%};\nconsole.assert({%1%} != abrupt completion);\nif ({%1%} == Completion Record){\n    {%1%} == {%1%}.[[Value]]\n};\n'
// );

letRegexPatternMap.set(
    // Let middle be floor(len / 2).
    new RegExp(`^Let ${Var} be ${Func}${End}$`, 'i'),
    'var {%1%} = {%2%};\n'
);


exports.letRegexPatternMap = letRegexPatternMap;

