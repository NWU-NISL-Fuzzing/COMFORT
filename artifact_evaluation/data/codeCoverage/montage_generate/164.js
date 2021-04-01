function f0() {
    var v0 = [];
    var v1 = new Proxy([
        0,
        ,
        0,
        ,
        0,
        0
    ], {
        deleteProperty: function (o, v) {
            v0.push(v);
            return +4294967295;
        }
    });
    v1.shift();
    return v0 + '' === '0,2,5';
}
if (!f0())
    throw new Error('Test failed');
