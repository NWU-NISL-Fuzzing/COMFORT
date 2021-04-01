var a = {};
Object.preventExtensions(a);
assert.throws(TypeError, function () {
    Object.setPrototypeOf(v0, null);
});