var v0 = {};
var v1 = new Proxy(v0, {
    getOwnPropertyDescriptor: function (t, prop) {
        var v2 = {};
        Object.defineProperty(v2, 'bar', {
            configurable: false,
            enumerable: true,
            value: 1
        });
        return Object.getOwnPropertyDescriptor(v2, x);
    }
});
assert.throws(TypeError, function () {
    Object.getOwnPropertyDescriptor(v1, 'bar');
});