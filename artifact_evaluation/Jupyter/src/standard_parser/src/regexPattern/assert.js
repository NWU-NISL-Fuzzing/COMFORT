// 导入基础正则
let {Var, Func, Num, Con, Op, End, All, Mark, op_trans} = require('./baseRegex');

// 定义映射规则
var assertRegexPatternMap = new Map();

// 单个和 Type 有关的判断条件
assertRegexPatternMap.set(
    // Assert: tv is NaN.
    new RegExp(`^Assert: ${Var} is NaN${End}$`, 'i'),
    'console.assert({%1%} === NaN);\n'
);
assertRegexPatternMap.set(
    // Assert: tv is not NaN.
    new RegExp(`^Assert: ${Var} is not NaN${End}$`, 'i'),
    'console.assert({%1%} !== NaN);\n'
);

assertRegexPatternMap.set(
    //Assert: y > 0 and x is +0.
    new RegExp(`^Assert: ${Var} ${Op} ${Num} and ${Var} is ${Num}${End}$`, 'i'),
    'console.assert({%1%} {%2%} {%3%} && {%4%} === {%5%});\n'
);

assertRegexPatternMap.set(
    //Assert: y is +0 and x > 0
    new RegExp(`^Assert: ${Var} is ${Num} and ${Var} ${Op} ${Num}${End}$`, 'i'),
    'console.assert({%1%} === {%2%} && {%3%} {%4%} {%5%});\n'
);

assertRegexPatternMap.set(
    //Assert: y is +0 and x is +0
    new RegExp(`^Assert: ${Var} is ${Num} and ${Var} is ${Num}${End}$`, 'i'),
    'console.assert({%1%} === {%2%} && {%3%} === {%4%});\n'
);

assertRegexPatternMap.set(
    //Assert: filler is the empty String
    new RegExp(`^Assert: ${Var} is the empty String${End}$`, 'i'),
    'console.assert({%1%} === "");\n'
);

assertRegexPatternMap.set(
    // Assert: intMaxLength is not greater than stringLength
    new RegExp(`^Assert: ${Var} is not greater than ${Var}${End}$`, 'i'),
    'console.assert({%1%} <= {%2%});\n'
);

assertRegexPatternMap.set(
    // Assert: len is zero
    new RegExp(`^Assert: ${Var} is zero${End}$`, 'i'),
    'console.assert({%1%} === 0);\n'
);

assertRegexPatternMap.set(
    // Assert: len is 0 and initialValue is not present
    new RegExp(`^Assert: ${Var} is 0 and ${Var} is not present${End}$`, 'i'),
    'console.assert({%1%} === 0 && {%2%} === undefined);\n'
);

assertRegexPatternMap.set(
    new RegExp(`^Assert: ${Var} is ${Con} and ${Var} is ${Var}${End}$`, 'i'),
    'console.assert({%1%} === {%2%} && {%3%} === {%4%});\n'
);

assertRegexPatternMap.set(
    // Assert: radixNumber is true|false|undefined|null
    new RegExp(`^Assert: ${Var} is ${Con}${End}$`, 'i'),
    // /^Assert: ([a-zA-Z0-9$_ ()\[\].,"@]+?) is (true|false|undefined|null)$/i,
    'console.assert({%1%} === {%2%});\n'
);
assertRegexPatternMap.set(
    // Assert: radixNumber is not true|false|undefined|null
    new RegExp(`^Assert: ${Var} is not ${Con}${End}$`, 'i'),
    // /^Assert: ([a-zA-Z0-9$_ ()\[\].,"@]+?) is (true|false|undefined|null)$/i,
    'console.assert({%1%} !== {%2%});\n'
);

assertRegexPatternMap.set(
    // Assert: radixNumber = 10
    new RegExp(`^Assert: ${Func} = ${Func}${End}$`, 'i'),
    // /^Assert: ([a-zA-Z0-9$_ ()\[\].,"@]+?) ([≥≤><≠=]) ([+\-a-zA-Z0-9$_ ()\[\].,"@]+?)$/i,
    'console.assert({%1%} === {%2%});\n'
);

assertRegexPatternMap.set(
    // Assert: radixNumber ≥ 10
    new RegExp(`^Assert: ${Func} ${Op} ${Func}${End}$`, 'i'),
    'console.assert({%1%} {%2%} {%3%});\n'
);

assertRegexPatternMap.set(
    // Assert: 0 ≤ yi ≤ 99
    new RegExp(`^Assert: ${Var} ${Op} ${Var} ${Op} ${Var}${End}$`, 'i'),
    'console.assert({%1%} {%2%} {%3%} && {%3%} {%4%} {%5%});\n'
);

assertRegexPatternMap.set(
    // Assert: radixNumber < 36 and radixNumber > 2, .....throw a RangeError exception.
    new RegExp(`^Assert: ${Var} ${Op} ${Var} and ${Var} ${Op} ${Var}${End}$`, 'i'),
    'console.assert({%1%} {%2%} {%3%} && {%4%} {%5%} {%6%});\n'
);

exports.assertRegexPatternMap = assertRegexPatternMap;