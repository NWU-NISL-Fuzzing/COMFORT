var v0 = {};
var v1 = function () {
    return 1001;
};
var v2 = 'data';
var v3 = function (value) {
    v2 = value;
};
Object.defineProperty(v0, 'prop', {
    get: undefined,
    set: v3,
    enumerable: false,
    configurable: true
});
var x = typeof v0.prop === 'undefined';
var v5 = Object.getOwnPropertyDescriptor(v0, 'prop');
Object.defineProperty(v0, 'prop', { get: v1 });
var v6 = v0.prop === 1001;
var v7 = Object.getOwnPropertyDescriptor(v0, 'prop');
assert(v6, 'result1 !== true');
assert(v6, 'result2 !== true');
assert.sameValue(typeof v5.get, 'undefined', 'typeof desc1.get');
assert.sameValue(v7.get, v1, 'desc2.get');