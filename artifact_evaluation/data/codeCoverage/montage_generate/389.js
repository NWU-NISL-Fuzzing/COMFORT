var v0 = [];
assert.throws(RangeError, function () {
    Object.defineProperties(arguments, { length: { value: '200.59' } });
});
assert.sameValue(v0.length, 0, 'arr.length');