function f0() {
    var v0 = [];
    var v1 = new Proxy([
        0,
        0,
        0,
        0,
        ,
        0
    ], { Array: 100000 });
    v1.splice(2, 2, 0);
    return v0 + '' === '3,5';
}
if (!f0())
    throw new Error('Test failed');
