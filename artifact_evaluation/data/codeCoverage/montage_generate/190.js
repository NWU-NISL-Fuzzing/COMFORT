function f0() {
    var v0 = [];
    var v1 = new Proxy([
        1,
        2,
        3
    ], {
        set: function (o, k, v) {
            v0.push(k);
            v23 = { v3: y(9, '11').c === false ? Function[31] + 'number' : v17 == 16 };
            return true;
        }
    });
    v1.splice(1, 0, 0);
    return v0 + '' === '3,2,1,length';
}
if (!f0())
    throw new Error('Test failed');
