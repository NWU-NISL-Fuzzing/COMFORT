// 导入基础正则
let {Var, Func, Num, Con, Op, End, Mark} = require('./baseRegex');


let specialStatementMap = new Map();

specialStatementMap.set(
    new RegExp(`^If ${Var} is \\+0, -0, Infinity, or -Infinity, return number${End}$`, 'i'),
    'if ({%1%} === +0 || {%1%} === -0 || {%1%} === Infinity || {%1%} === -Infinity)\nreturn number;\n'
);

specialStatementMap.set(
    // Let first be the numeric value of the code unit at index position within s.
    new RegExp(`^Let first be the numeric value of the code unit at index position within s${End}$`, 'i'),
    ''
);


specialStatementMap.set(
    new RegExp(`^Let ${Var} be the List of argument values starting with the second argument${End}$`, 'i'),
    'var {%1%} = arguments.slice(1);\n'
);

specialStatementMap.set(
    new RegExp(`^let ${Var} be the String value consisting solely of the code unit 0x0020 \\(SPACE\\)${End}$`, 'i'),
    'var {%1%} = " ";\n'
);
specialStatementMap.set(
    new RegExp(`^otherwise let ${Var} be ${Func}${End}$`, 'i'),
    'else {\nvar {%1%} = {%2%}\n}\n'
);

specialStatementMap.set(
    new RegExp(`^For each ${Var} that is an element of ${Var}, do${End}$`, 'i'),
    'for (let {%1%} in {%2%})\n'
);

specialStatementMap.set(
    new RegExp(`^If Type\\(O\\) is not Object or Type\\(O\\) is Object and O does not have a RegExpMatcher internal slot, then${End}$`, 'i'),
    'if (typeof O !== "object" || (typeof O === "object" && O.RegExpMatcher === undefined) )\n'
);

specialStatementMap.set(
    new RegExp(`^If Type\\(pattern\\) is Object and pattern has a RegExpMatcher internal slot, then${End}$`, 'i'),
    'if (typeof pattern === "object" && pattern.RegExpMatcher !== undefined )\n'
);

specialStatementMap.set(
    new RegExp(`^For each Record \\{ Key, Value \\} p that is an element of entries(?:, do)*${End}$`, 'i'),
    'for (let p in entries)\n'
);

specialStatementMap.set(
    new RegExp(`^If Type\\(func\\) is Object and func has a SourceText internal slot and Type\\(func\\.SourceText\\) is String and HostHasSourceTextAvailable\\(func\\) is true, then return func\\.SourceText${End}$`, 'i'),
    'if (typeof func === "object" && func.SourceText !== null && typeof func.SourceText === "string" && HostHasSourceTextAvaliable(func) === true){\nreturn func.SourceText;\n}\n'
);

specialStatementMap.set(
    new RegExp(`^If Type\\(func\\) is Object and IsCallable\\(func\\) is true, then return an implementation-dependent String source code representation of func\\. The representation must have the syntax of a NativeFunction\\.${End}$`, 'i'),
    'if (typeof func === "object" && IsCallable(func) === true){\nreturn " ";\n}\n'
);

specialStatementMap.set(
    new RegExp(`^Let gap be the String value containing space occurrences of the code unit 0x0020 \\(SPACE\\)\\. This will be the empty String if space is less than 1${End}$`, 'i'),
    'var gap = "";\n if (space < 1){\nvar gap = "";\n}\n' +
    'else {\nfor(var i = 0; i<space; i++){\ngap += " ";\n} \n}\n'
);

specialStatementMap.set(
    new RegExp(`^Let items be a List whose elements are, in left to right order, the portion of the actual argument list starting with the third argument\\. The list is empty if fewer than three arguments were passed${End}$`, 'i'),
    'var items = [];\nif (arguments.length > 3){\nfor (var i=3; i<arguments.length; i++){\nitems.push(arguments[i]);\n}\n}\n'
);

specialStatementMap.set(
    new RegExp(`^Increment ${Var} by ${Num}${End}$`, 'i'),
    '{%1%} += {%2%};\n'
);

specialStatementMap.set(
    new RegExp(`^Let W be the first agent in S${End}$`, 'i'),
    'var W = S[0];\n'
);

specialStatementMap.set(
    new RegExp(`^Let len be the actual number of arguments passed to this function${End}$`, 'i'),
    'var len = arguments.length;\n'
);

specialStatementMap.set(
    new RegExp(`^Let items be the List of arguments passed to this function${End}$`, 'i'),
    'var len = arguments;\n'
);

specialStatementMap.set(
    new RegExp(`^Let elementType be the String value of the Element Type value in Table 59 for arrayTypeName${End}$`, 'i'),
    'var elementType = elementType.replace("Array","");\n'
);

specialStatementMap.set(
    new RegExp(`^Let elementSize be the Number value of the Element Size value specified in Table 59 for arrayTypeName${End}$`, 'i'),
    'bits = elementType.repalce(/[^0-9]/ig,"");\n' +
    'var elementSize = parseInt(bits) / 8;\n'
);

specialStatementMap.set(
    new RegExp(`^Let error be ThrowCompletion\\(a newly created TypeError object\\)${End}$`, 'i'),
    'err = new TypeError();\n' +
    'error = ThrowCompletion(err);\n'
);

specialStatementMap.set(
    // let sep be the single-element String ",".
    // 整个ES标准只有这一处语法，所以直接写死了
    new RegExp(`^If the length of space is 10 or less, let gap be space; otherwise let gap be the String value consisting of the first 10 code units of space${End}$`, 'i'),
    'var gap;\nif (space.length <= 10){\ngap = space;\n}\nelse{\ngap = space.substring(0,10);\n}\n'
);

specialStatementMap.set(
    // let sep be the single-element String ",".
    // 整个ES标准只有这一处语法，所以直接写死了
    new RegExp(`^Search string for the first occurrence of searchString and let pos be the index within string of the first code unit of the matched substring and let matched be searchString. If no occurrences of searchString were found, return string${End}$`, 'i'),
    'var pos = string.indexOf(searchString);\nvar matched = searchString;\nif (pos === -1){\nreturn string;\n}\n'
);

specialStatementMap.set(
    new RegExp(`If item is not undefined and item is not currently an element of PropertyList, then${End}$`, 'i'),
    'if (item !== undefined && PropertyList.indexOf(item) !== -1)\n'
);

specialStatementMap.set(
    new RegExp(`^Let tailPos be pos + the number of code units in matched${End}$`, 'i'),
    'var tailPos = pos + matched.length;\n'
);

specialStatementMap.set(
    new RegExp(`^Let newString be the string-concatenation of the first pos code units of string, replStr, and the trailing substring of string starting at index tailPos. If pos is 0, the first element of the concatenation will be the empty String${End}$`, 'i'),
    'var front = string.substring(0, pos);\nif (pos === 0){\n    front = "";\n}\nvar newString = front + replStr + string.substring(tailPos, string.length);\n'
);

specialStatementMap.set(
    new RegExp(`^If ${Var} is ${Con}, let ${Var} be the single-element String ","${End}$`, 'i'),
    'if ({%1%} === {%2%}) { var {%3%} = ","; }\n'
);

specialStatementMap.set(
    new RegExp(`^If this method was called with more than one argument, then in left to right order, starting with the second argument, append each argument as the last element of ${Var}${End}$`, 'i'),
    'if (arguments.length > 1) { for (let ii = 1; ii < arguments.length; ii++) { {%1%}.push(arguments[ii]); }}\n'
);

specialStatementMap.set(
    // If element is undefined or null, let next be the empty String; otherwise, let next be ? ToString(element).
    new RegExp(`^If ${Var} is undefined or null, let ${Var} be the empty String; otherwise, let ${Var} be ${Mark}${Func}${End}$`, 'i'),
    'if ({%1%} === undefined || {%1%} === null) { var {%2%} = ""; } else { var {%3%} = {%5%}; }\n'
);


specialStatementMap.set(
    // If searchValue is neither undefined nor null, then
    new RegExp(`^If ${Var} is neither undefined nor null, then${End}$`, 'i'),
    'if ({%1%} !== undefined && {%1%} !== null)\n'
);

specialStatementMap.set(
    new RegExp(`^the result is (${Func})${End}$`, 'i'),
    'return {%1%};\n'
);

exports.specialStatementMap = specialStatementMap;
