var {
    x: x = f
} = {};
assert.sameValue(x, 33);
assert.throws(ReferenceError, function () {
    x;
});