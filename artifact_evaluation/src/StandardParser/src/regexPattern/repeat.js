// 导入基础正则
let {Var, Func, Num, End, Op, Con, All} = require('./baseRegex');

// 定义Repeat开头的句式的映射规则

var repeatRegexPatternMap = new Map();

repeatRegexPatternMap.set(
    // Repeat,
    /^Repeat,$/i,
    'while(true)\n'
    );

repeatRegexPatternMap.set(
    // Repeat, while kPresent is false and k < len
    new RegExp(`^Repeat, while ${Func} is ${Var} and ${Func} ${Op} ${Func}${End}$`, 'i'),
    //     /^Repeat, while ([a-zA-Z0-9$_ ()\[\].,"@]+?) is ([a-zA-Z0-9$_]+?) and ([a-zA-Z0-9$_ ()\[\].,"@]+?) ([≥≤><]) ([a-zA-Z0-9$_ ()\[\].,"@]+?)[,]*$/i,

    'while({%1%} === {%2%} && {%3%} {%4%} {%5%})\n'
    );

repeatRegexPatternMap.set(
    // Repeat, while q ≠ s
    new RegExp(`^Repeat, while ${Func} ${Op} ${Func}${End}$`, 'i'),
    // /^Repeat, while ([a-zA-Z0-9$_ ()\[\].,"@]+?) ≠ ([a-zA-Z0-9$_ ()\[\].,"@]+?)$/i,
    'while({%1%} {%2%} {%3%})\n'
    );

repeatRegexPatternMap.set(
    // Repeat, while done is false|true|null|undefined
    new RegExp(`^Repeat, while ${Func} is ${Con}${End}$`, 'i'),
    // /^Repeat, while ([a-zA-Z0-9$_ ()\[\].,"@]+?) is ([a-zA-Z0-9$_]+?)[,]*$/i,
    'while({%1%} === {%2%})\n'
    );

repeatRegexPatternMap.set(
    // Repeat, while done is not false|true|null|undefined
    new RegExp(`^Repeat, while ${Func} is not ${Con}${End}$`, 'i'),
    // /^Repeat, while ([a-zA-Z0-9$_ ()\[\].,"@]+?) is ([a-zA-Z0-9$_]+?)[,]*$/i,
    'while({%1%} !== {%2%})\n'
    );

repeatRegexPatternMap.set(
    // Repeat, while thisLex is not the same as varEnv,
    new RegExp(`^Repeat, while ${Func} is not the same as ${Func}${End}$`, 'i'),
    // /^Repeat, while ([a-zA-Z0-9$_ ()\[\].,"@]+?) is not the same as ([a-zA-Z0-9$_]+?)[,]*$/i,
    'while({%1%} !== {%2%})\n'
    );

repeatRegexPatternMap.set(
    // Repeat, while thisLex is not the same as varEnv,
    new RegExp(`^Repeat, while ${Func} is the same as ${Func}${End}$`, 'i'),
    // /^Repeat, while ([a-zA-Z0-9$_ ()\[\].,"@]+?) is not the same as ([a-zA-Z0-9$_]+?)[,]*$/i,
    'while({%1%} === {%2%})\n'
    );

repeatRegexPatternMap.set(
    // Repeat, while args is not empty
    /^Repeat, while args is not empty[,]*$/i,
    'while(arguments.length !== 0)\n'
    );

repeatRegexPatternMap.set(
    // Repeat, while args is not empty
    /^Repeat, while args is empty[,]*$/i,
    'while(arguments.length === 0)\n'
    );

repeatRegexPatternMap.set(
    // Repeat, while items is empty
    new RegExp(`^Repeat, while ${Func} is empty${End}$`, 'i'),
    // /^Repeat, while ([a-zA-Z0-9$_ ()\[\].,"@]+?) is empty[,]*$/i,
    'while({%1%}.length === 0)\n'
    );
repeatRegexPatternMap.set(
    // Repeat, while items is not empty
    new RegExp(`^Repeat, while ${Func} is not empty${End}$`, 'i'),
    // /^Repeat, while ([a-zA-Z0-9$_ ()\[\].,"@]+?) is not empty[,]*$/i,
    'while({%1%}.length !== 0)\n'
    );

// 最后的捕获条件（用来兜底）
// repeatRegexPatternMap.set(
//     // Repeat, while k < argCount - 1
//     new RegExp(`^Repeat, while ${All}${End}$`, 'i'),
//     // /^Repeat, while (.*?)[,]*$/i,
//     'while({%1%})\n'
//     );

exports.repeatRegexPatternMap = repeatRegexPatternMap;
