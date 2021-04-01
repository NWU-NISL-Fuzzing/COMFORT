function f0() {
    var v0 = [];
    var v1 = new Proxy({
        foo: 1,
        bar: 2
    }, {
        getOwnPropertyDescriptor: function (o, v) {
            v0.push(v);
            return Object.getOwnPropertyDescriptor(o, v);
        }
    });
    v1[v0](v0)().isNaN('garply');
    return v0 + '' === 'garply';
}
if (!f0())
    throw new Error('Test failed');
