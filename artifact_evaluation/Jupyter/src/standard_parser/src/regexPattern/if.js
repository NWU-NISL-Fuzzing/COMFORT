// 导入基础正则
let {Var, Func, Num, Con, Op, End} = require('./baseRegex');

// 定义映射规则
var ifRegexPatternMap = new Map();

// 单个和 Type 有关的判断条件
ifRegexPatternMap.set(
    //If either x or y is NaN
    new RegExp(`^If either ${Var} or ${Var} is ${Con}${End}$`, 'i'),
    'if ({%1%} === {%3%} || {%2%} === {%3%})\n'
);

ifRegexPatternMap.set(
    //If y > 0 and x is +0.
    new RegExp(`^If ${Var} ${Op} ${Num} and ${Var} is ${Num}${End}$`, 'i'),
    'if ({%1%} {%2%} {%3%} && {%4%} === {%5%})\n'
);

ifRegexPatternMap.set(
    //If y is +0 and x > 0
    new RegExp(`^If ${Var} is ${Num} and ${Var} ${Op} ${Num}${End}$`, 'i'),
    'if ({%1%} === {%2%} && {%3%} {%4%} {%5%})\n'
);

ifRegexPatternMap.set(
    //If y is +0 and x is +0
    new RegExp(`^If ${Var} is ${Num} and ${Var} is ${Num}${End}$`, 'i'),
    'if ({%1%} === {%2%} && {%3%} === {%4%})\n'
);

ifRegexPatternMap.set(
    //If y > 0 and y is finite and x is +∞
    new RegExp(`^If ${Var} ${Op} ${Num} and ${Var} is finite and ${Var} is ${Var}\\.${Var}${End}$`, 'i'),
    'if ({%1%} {%2%} {%3%} && Number.isFinite({%4%}) && {%5%} === {%6%}.{%7%})\n'
);

ifRegexPatternMap.set(
    //If any value is NaN
    new RegExp(`^If any value is ${Con}${End}$`, 'i'),
    'for (let i = 0; i < arguments.length; i++){\n if (arguments[i] === NAN) {\n return {%1%};\n}\n}\n'
);

ifRegexPatternMap.set(
    //If filler is the empty String
    new RegExp(`^If ${Var} is the empty String${End}$`, 'i'),
    'if ({%1%} === "")\n'
);

ifRegexPatternMap.set(
    // If intMaxLength is not greater than stringLength
    new RegExp(`^If ${Var} is not greater than ${Var}${End}$`, 'i'),
    'if ({%1%} <= {%2%})\n'
);

ifRegexPatternMap.set(
    new RegExp(`^If ${Func} is not empty and (SameValueZero|SameValue)\\(${Func}, ${Func}\\) is ${Con}${End}$`, 'i'),
    'if ({%1%} === "" && {%2%}({%3%}, {%4%}) === {%5%})\n'
);

ifRegexPatternMap.set(
    new RegExp(`^If ${Var} does not have (?:a|an) ${Var} internal (?:slot|method)${End}$`, 'i'),
    'if ({%1%}.{%2%} === undefined)\n'
);

ifRegexPatternMap.set(
    // If space has a [[NumberData]] internal slot
    new RegExp(`^If ${Var} has a ${Var} internal slot${End}$`, 'i'),
    'if ({%1%}.{%2%} !== null)\n'
);

ifRegexPatternMap.set(
    // If v has a [[StringData]] or [[NumberData]] internal slot
    new RegExp(`^If ${Var} has a ${Var} or ${Var} internal slot${End}$`, 'i'),
    'if ({%1%}.{%2%} !== null || {%1%}.{%3%} !== null)\n'
);

ifRegexPatternMap.set(
    // If len is zero
    new RegExp(`^If ${Var} is zero${End}$`, 'i'),
    'if ({%1%} === 0)\n'
);

ifRegexPatternMap.set(
    // If itemKind is "value"
    new RegExp(`^If ${Var} is "${Var}"${End}$`, 'i'),
    'if ({%1%} === "{%2%}")\n'
);

ifRegexPatternMap.set(
    // If no arguments were passed to this function invocation
    new RegExp(`^If no arguments were passed to this function invocation${End}$`, 'i'),
    'if (arguments.length === 0)\n'
);

ifRegexPatternMap.set(
    // If byteLength is either not present or undefined
    new RegExp(`^If ${Var} is either not present or undefined${End}$`, 'i'),
    'if ({%1%} === undefined)\n'
);

ifRegexPatternMap.set(
    // If first < 0xD800 or first > 0xDBFF or position + 1 = len
    new RegExp(`^If ${Var} < 0xD800 or ${Var} > 0xDBFF or ${Var} + 1 = ${Var}${End}$`, 'i'),
    'if ({%1%} < 0xD800 || {%2%} > 0xDBFF || {%3%} + 1 === {%4%})\n'
);

ifRegexPatternMap.set(
    // If char is one of the code units in "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@*_+-./",
    new RegExp(`^If char is one of the code units in "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@*_+-./"${End}$`, 'i'),
    'if ()\n'
);

ifRegexPatternMap.set(
    // If comparefn is not undefined and IsCallable(comparefn) is false
    new RegExp(`^If ${Var} is not ${Con} and ${Func} is ${Con}${End}$`, 'i'),
    'if ({%1%} !== {%2%} && {%3%} === {%4%})\n'
);

ifRegexPatternMap.set(
    // If len is 0 and initialValue is not present
    new RegExp(`^If ${Var} is 0 and ${Var} is not present${End}$`, 'i'),
    'if ({%1%} === 0 && {%2%} === undefined)\n'
);

ifRegexPatternMap.set(
    new RegExp(`^If ${Var} is ${Con} and ${Var} is ${Var}${End}$`, 'i'),
    'if ({%1%} === {%2%} && {%3%} === {%4%})\n'
);

ifRegexPatternMap.set(
    // If Type(O) is number,
    new RegExp(`^If Type\\(${Var}\\) is Number${End}$`, 'i'),
    'if (typeof {%1%} === "number")\n'
);
ifRegexPatternMap.set(
    // If Type(O) is not number,
    new RegExp(`^If Type\\(${Var}\\) is not Number${End}$`, 'i'),
    'if (typeof {%1%} !== "number")\n'
);

ifRegexPatternMap.set(
    // If Type(O) is Object,
    new RegExp(`^If Type\\(${Var}\\) is Object${End}$`, 'i'),
    'if (typeof {%1%} === "object")\n'
);
ifRegexPatternMap.set(
    // If Type(O) is not Object,
    new RegExp(`^If Type\\(${Var}\\) is not Object${End}$`, 'i'),
    'if (typeof {%1%} !== "object")\n'
);

ifRegexPatternMap.set(
    // If radixNumber is true|false|undefined|null
    new RegExp(`^If ${Var} is ([a-zA-Z0-9]+\\.[a-zA-Z0-9]+)${End}$`, 'i'),
    // /^if ([a-zA-Z0-9$_ ()\[\].,"@]+?) is (true|false|undefined|null)$/i,
    'if ({%1%} === {%2%})\n'
);

ifRegexPatternMap.set(
    // If Type(O) is String,
    new RegExp(`^If Type\\(${Var}\\) is String${End}$`, 'i'),
    'if (typeof {%1%} === "string")\n'
);

ifRegexPatternMap.set(
    // If Type(O) is not String,
    new RegExp(`^If Type\\(${Var}\\) is not String${End}$`, 'i'),
    'if (typeof {%1%} !== "string")\n'
);

ifRegexPatternMap.set(
    //If Type(O) is neither Object nor Null, throw a TypeError exception.
    new RegExp(`If Type\\(${Var}\\) is neither ${Var} nor ${Var}`, 'i'),
    'if (typeof {%1%} !== {%2%} || typeof {%1%} !== {%3%})\n'
);

ifRegexPatternMap.set(
    //If Type(O) is neither Object nor Null, throw a TypeError exception.
    new RegExp(`If Type\\(${Var}\\) is not Object and ${Var} is not null`, 'i'),
    'if (typeof {%1%} !== "object" && {%2%} !== null)\n'
);

ifRegexPatternMap.set(
    //If Type(O) is neither Object nor Null, throw a TypeError exception.
    new RegExp(`If Type\\(${Var}\\) is Object and ${Var} has a ${Var} internal slot`, 'i'),
    'if (typeof {%1%} === "object" && {%2%}.{%3%} !== undefined)\n'
);

ifRegexPatternMap.set(
    // If form is not present or form is undefined, set form to "NFC"
    new RegExp(`If ${Var} is not present or ${Var} is undefined${End}`,'i'),
    'if ({%1%} == undefined || {%2%} === undefined)\n'
);

ifRegexPatternMap.set(
    //If mapfn is present and mapfn is not undefined
    new RegExp(`If ${Var} is present and ${Var} is not undefined${End}`,'i'),
    'if ({%1%} !== undefined && {%2%} !== undefined)\n'
);

ifRegexPatternMap.set(
    // If form is not present or form is undefined, set form to "NFC"
    new RegExp(`If ${Var} is present or ${Var} is undefined${End}`,'i'),
    'if ({%1%} !== undefined || {%2%} === undefined)\n'
);

ifRegexPatternMap.set(
    // If radix is not present
    // If Desc.[[Value]] is absent
    new RegExp(`^If ${Func} is (not present|absent)${End}`, 'i'),
    // /^if ([a-zA-Z0-9$_ ()\[\].,"@]+?) is (not present|absent)$/i,
    'if ({%1%} === undefined)\n'
);

ifRegexPatternMap.set(
    // If radix is present
    new RegExp(`^If ${Func} is present${End}$`, 'i'),
    // /^if ([a-zA-Z0-9$_ ()\[\].,"@]+?) is present$/i,
    'if ({%1%} !== undefined)\n'
);

ifRegexPatternMap.set(
    // 特殊，因为ES描述中的 = 需要转化为 === ，但是又无法在后面完成，所以只能在这里硬匹配。注意和下面正则的顺序
    // If radixNumber = 10
    new RegExp(`^If ${Func} = ${Func}${End}$`, 'i'),
    // /^if ([a-zA-Z0-9$_ ()\[\].,"@]+?) ([≥≤><≠=]) ([+\-a-zA-Z0-9$_ ()\[\].,"@]+?)$/i,
    'if ({%1%} === {%2%})\n'
);

ifRegexPatternMap.set(
    // If radixNumber ≥ 10
    new RegExp(`^If ${Func} ${Op} ${Func}${End}$`, 'i'),
    // /^if ([a-zA-Z0-9$_ ()\[\].,"@]+?) ([≥≤><≠=]) ([+\-a-zA-Z0-9$_ ()\[\].,"@]+?)$/i,
    'if ({%1%} {%2%} {%3%})\n'
);
ifRegexPatternMap.set(
    // If 0 ≤ yi ≤ 99
    new RegExp(`^If ${Var} ${Op} ${Var} ${Op} ${Var}${End}$`, 'i'),
    'if ({%1%} {%2%} {%3%} && {%3%} {%4%} {%5%})\n'
);


ifRegexPatternMap.set(
    //     // );
    //     // 'if ({%1%} {%2%} {%3%} && {%4%} {%5%} {%6%} {%7%} {%8%})\n'
    //     // new RegExp(`^If ${Var} is 0 and ${Var} ${Op} ${Var} ([+\\-]) ${Var}${End}$`, 'i'),
    //     // // If from < to and to < from + count,
    // ifRegexPatternMap.set(
    // 以下是多个判断条件
    // If from < to and to < from + count,
    new RegExp(`^If ${Var} ${Op} ${Var} and ${Var} ${Op} ${Var} ([+\\-]) ${Var}${End}$`, 'i'),
    'if ({%1%} {%2%} {%3%} && {%4%} {%5%} {%6%} {%7%} {%8%})\n'
);

ifRegexPatternMap.set(
    // If from < to or to < from + count,
    new RegExp(`^If ${Var} ${Op} ${Var} or ${Var} ${Op} ${Var} ([+\\-]) ${Var}${End}$`, 'i'),
    'if ({%1%} {%2%} {%3%} || {%4%} {%5%} {%6%} {%7%} {%8%})\n'
);

ifRegexPatternMap.set(
    // If radixNumber < 2 or radixNumber > 36, .....throw a RangeError exception.
    new RegExp(`^If ${Var} ${Op} ${Var} or ${Var} ${Op} ${Var}${End}$`, 'i'),
    'if ({%1%} {%2%} {%3%} || {%4%} {%5%} {%6%})\n'
);

ifRegexPatternMap.set(
    // If radixNumber < 36 and radixNumber > 2, .....throw a RangeError exception.
    new RegExp(`^If ${Var} ${Op} ${Var} and ${Var} ${Op} ${Var}${End}$`, 'i'),
    'if ({%1%} {%2%} {%3%} && {%4%} {%5%} {%6%})\n'
);


// 以下是单个判断条件
ifRegexPatternMap.set(
    // If radixNumber is true|false|undefined|null
    new RegExp(`^If (?:the )*${Func} is ${Con}${End}$`, 'i'),
    // /^if ([a-zA-Z0-9$_ ()\[\].,"@]+?) is (true|false|undefined|null)$/i,
    'if ({%1%} === {%2%})\n'
);

ifRegexPatternMap.set(
    // If radixNumber is not true|false|undefined|null
    new RegExp(`^If ${Func} is not ${Con}${End}$`, 'i'),
    // /^if ([a-zA-Z0-9$_ ()\[\].,"@]+?) is not (true|false|undefined|null)$/i,
    'if ({%1%} !== {%2%})\n'
);

ifRegexPatternMap.set(
    // If length is -0
    new RegExp(`^If ${Func} is ${Num}${End}$`, 'i'),
    // /^if ([a-zA-Z0-9$_ ()\[\].,"@]+?) is ([+\-0-9]+?)$/i,
    'if ({%1%} === {%2%})\n'
);

exports.ifRegexPatternMap = ifRegexPatternMap;