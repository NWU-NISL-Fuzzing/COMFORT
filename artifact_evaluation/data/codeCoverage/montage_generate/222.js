function f0() {
    var v0 = [];
    var v1 = new Proxy({}, {
        get: function (o, k) {
            v0.push(k);
            return this.v0;
        }
    });
    Error.prototype.toString.call(v1);
    return v0 + '' === 'name,message';
}
if (!f0())
    throw new Error('Test failed');
