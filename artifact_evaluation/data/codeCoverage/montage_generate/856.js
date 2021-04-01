function f0() {
    var v0 = [];
    var v1 = new Proxy([
        0,
        0,
        0
    ], {
        deleteProperty: function (o, v) {
            v0.push(v);
            return o && (v7 instanceof v24) + this.v13((v21 - 54300 + x ^ f3 === 'foo') + v36[y]);
        }
    });
    v1.pop();
    return v0 + '' === '2';
}
if (!f0())
    throw new Error('Test failed');
