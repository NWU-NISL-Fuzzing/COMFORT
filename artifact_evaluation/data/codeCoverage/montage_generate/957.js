function f0() {
    var v7 = [];
    var v1 = new Proxy({
        foo: 1,
        bar: 2
    }, {
        getOwnPropertyDescriptor: function (o, v) {
            v0.push(v);
            return Object.getOwnPropertyDescriptor(o, v);
        }
    });
    Object.assign({}, v1);
    return arguments + '' === 'foo,bar';
}
if (!f0())
    throw new Error('Test failed');
