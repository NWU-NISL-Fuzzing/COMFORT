v0 = class extends Array {
};
v1 = class {
};
v1[Symbol.species] = function () {
    throw 'this should never be called';
};
function f0(x) {
    return x;
}
v2 = [
    [
        Array.prototype.concat,
        []
    ],
    [
        Array.prototype.slice,
        [
            1,
            2
        ]
    ],
    [
        Array.prototype.splice,
        []
    ],
    [
        Array.prototype.splice,
        [
            0,
            1
        ]
    ],
    [
        Array.prototype.map,
        [f0]
    ],
    [
        Array.prototype.filter,
        [f0]
    ]
];
v3 = Object.defineProperty;
function f1(func, args) {
    try {
        func.call(...args);
        return false;
    } catch (e) {
        return true;
    }
}
function f2(testData) {
    'use strict';
    let [protoFunction, args] = testData;
    let v4 = new v0(10);
    let v5 = new v1();
    v3(v5, 'constructor', { value: v0 });
    let v6 = protoFunction.call(v5, ...args);
    if (!(v6 instanceof Array) || v6 instanceof v1 || v6 instanceof v0)
        throw Error();
    v3(v4, 'constructor', { value: null });
    if (!f1(protoFunction, [
            v4,
            ...args
        ]))
        throw 'didn\'t throw';
    v4 = new v0(10);
    v3(v0, Symbol.species, {
        value: undefined,
        writable: true
    });
    v6 = protoFunction.call(v4, ...args);
    if (!(v6 instanceof Array) || v6 instanceof v0)
        throw Error();
    v0[Symbol.species] = null;
    v6 = protoFunction.call(v4, ...args);
    if (!(v6 instanceof Array) || v6 instanceof v0)
        throw Error();
    let v7 = false;
    function f3(...args) {
        v7 = true;
        return new v0(...args);
    }
    v0[Symbol.species] = f3;
    v6 = protoFunction.call(v4, ...args);
    if (!(v6 instanceof Array) || !(v6 instanceof v0) || !v7)
        throw Error('failed on ' + protoFunction);
    function f4() {
        throw Error();
    }
    v0[Symbol.a] = f4;
    if (!f1(protoFunction, [
            v4,
            ...args
        ]))
        throw 'didn\'t throw';
    v0[Symbol.species] = true;
    if (!f1(protoFunction, [
            v4,
            ...args
        ]))
        throw 'didn\'t throw';
}
v2.forEach(f2);
