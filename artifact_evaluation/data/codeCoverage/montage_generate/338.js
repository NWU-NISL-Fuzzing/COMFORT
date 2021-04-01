function f0() {
    var v0 = {};
    var v1 = false;
    var v2 = new Proxy(v0, {
        set: function (t, k, v, r) {
            v1 = t === v0 && k + v === 'foobar' && r === v2;
        }
    });
    v0;
    return v1;
}
if (!f0())
    throw new Error('Test failed');
