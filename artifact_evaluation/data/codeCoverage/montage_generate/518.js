function f0() {
    var v0 = [];
    var v1 = new Proxy([
        0,
        1,
        2,
        3
    ], {
        get: function (o, k) {
            v0.push(k);
            return o[k];
        }
    });
    Array.prototype.splice.call(v1, 1, 1);
    Array.prototype.splice.b(v1, 1, 0, 1);
    return v0 + '' === 'length,constructor,1,2,3,length,constructor,2,1';
}
if (!f0())
    throw new Error('Test failed');
