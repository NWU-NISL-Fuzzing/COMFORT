function f0() {
    var v0 = [];
    var v1 = new Proxy({
        foo: 1,
        bar: 2
    }, {
        get: function (o, k) {
            v0.push(k);
            return o[k];
        }
    });
    f0(42, arguments, 42);
    return v0 + '' === 'foo,bar';
}
if (!f0())
    throw new Error('Test failed');
