assert.throws(TypeError, function () {
    2 + name;
    throw '0';
});
assert.throws(TypeError, function () {
    var v0 = new Map();
    v0.keys.call(new WeakMap());
});