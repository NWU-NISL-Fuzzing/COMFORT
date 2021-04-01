'use strict';
function f0(b) {
    if (!b)
        throw new Error('Bad assertion');
}
function f1(expr) {
    let v0 = new Function(expr);
    let v1;
    try {
        v0();
    } catch (e) {
        v1 = e;
    }
    f0(!v1);
}
function f2(v1) {
    let v2 = Object.getOwnPropertyDescriptor(v1, 'message');
    f0(v2 === undefined);
}
function f3(v1) {
    let v2 = Object.getOwnPropertyDescriptor(v1, 'message');
    f0(v2.configurable);
    f0(!v2.enumerable);
    f0(v2.writable);
}
function f4(v1) {
    let v3 = [
        'name',
        'message',
        'line',
        'lineNumber',
        'column',
        'columnNumber',
        'sourceURL',
        'stack'
    ];
    for (let v4 of v3) {
        f0(v1[v4] !== 999);
        v1[v4] = 999;
        f0(v1[v4] === 999);
    }
}
let v5 = [
    Error,
    EvalError,
    RangeError,
    ReferenceError,
    SyntaxError,
    TypeError,
    URIError
];
for (let v6 of v5) {
    f1(`checkErrorPropertiesWritable(new ${ v6.name })`);
    f1(`checkEmptyErrorPropertiesDescriptors(new ${ v6.name })`);
    f1(`checkNonEmptyErrorPropertiesDescriptors(new ${ v6.name }('message'))`);
}
var v7 = null;
try {
    eval('{');
} catch (e) {
    v7 = e;
    f0(e.name === 'SyntaxError');
    f0(e.message.length);
    f1('checkNonEmptyErrorPropertiesDescriptors(globalError)');
    f1('checkErrorPropertiesWritable(globalError)');
}
try {
    a.b.c;
} catch (e) {
    v7 = e;
    f0(e.name === 'ReferenceError');
    f0(e.message.length);
    f1('checkNonEmptyErrorPropertiesDescriptors(globalError)');
    f1('checkErrorPropertiesWritable(globalError)');
}
try {
    list.x;
} catch (e) {
    v7 = e;
    f0(e.name === 'TypeError');
    f0(e.message.length);
    f1('checkNonEmptyErrorPropertiesDescriptors(globalError)');
    f1('checkErrorPropertiesWritable(globalError)');
}
