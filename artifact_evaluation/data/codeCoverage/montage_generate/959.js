function f0() {
    var v0 = [];
    var v1 = new Proxy([], {
        set: function (o, k, v) {
            v0.push(k);
            o[k] = v;
            return true;
        }
    });
    v1.pop();
    return v0 + '' === 'length';
}
if (!f0())
    throw new Error('Test failed');
