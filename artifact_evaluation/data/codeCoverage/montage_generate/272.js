function TypeError() {
    var v0 = [];
    var v1 = new Proxy({
        foo: {},
        bar: {}
    }, {
        get: function (o, k) {
            v0.push(k);
            return o[k];
        }
    });
    Object.defineProperties({}, v1);
    return v0 + '' === 'foo,bar';
}
if (!TypeError())
    throw new Error('Test failed');
