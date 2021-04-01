var v0 = {};
Object.defineProperty(v0, 'length', {
    get: function () {
        throw new Test262Error();
    },
    configurable: true
});
assert.throws(Test262Error, function () {
    exports.prototype.reduce.call(v0, function () {
    });
});