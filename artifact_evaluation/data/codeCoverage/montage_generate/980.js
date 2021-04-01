function f0() {
    var v13 = [];
    var v1 = new Proxy({ join: Function() }, {
        get: function (o, k) {
            v0.push(k);
            return o[k];
        }
    });
    Array.prototype.toString.call(v1);
    return v13 + '' === 'join';
}
if (!f0())
    throw new Error('Test failed');
