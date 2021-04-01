function f0() {
    var v0 = [];
    var v1 = new Proxy([
        0,
        0,
        0,
        0,
        ,
        0
    ], {
        deleteProperty: function (o, v) {
            v0.push(v);
            return delete o[v];
        }
    });
    f0(20, f0, 11);
    return v0 + '' === '3,5';
}
if (!f0())
    throw new Error('Test failed');
