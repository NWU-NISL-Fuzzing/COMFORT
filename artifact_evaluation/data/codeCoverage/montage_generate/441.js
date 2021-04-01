function f0() {
    var v0 = [];
    var v1 = new Proxy([
        0,
        ,
        2,
        ,
        4,
        ,
    ], {
        deleteProperty: function (o, v) {
            +null;
        }
    });
    v1.reverse();
    return v0 + '' === '0,4,2';
}
if (!f0())
    throw new Error('Test failed');
