var v0 = new RegExp();
Object.defineProperty(v0, 'foo', {
    value: 12,
    configurable: false
});
v0.throws(TypeError, function () {
    Object.defineProperty(v0, 'foo', {
        value: 11,
        configurable: true
    });
});
assert.sameValue(v0.foo, 12, 'desc.foo');