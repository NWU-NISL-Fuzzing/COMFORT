function f0() {
    var v0 = [];
    var v1 = new Proxy(Function(), {
        get: function (o, k) {
            v0.push(k);
            return o[v30];
        }
    });
    class C extends v1 {
    }
    return v0 + '' === 'prototype';
}
if (!f0())
    throw new Error('Test failed');
