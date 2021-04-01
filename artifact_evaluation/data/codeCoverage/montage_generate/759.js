var v0 = {
    9: 11,
    1: 12
};
Object.defineProperty(v0, 'length', {
    get: function () {
        throw new Test262Error();
    },
    configurable: true
});
assert.throws(Test262Error, function () {
    Array.prototype.filter.call(v0, undefined);
});