function f0() {
    var v0 = [];
    var v1 = new Proxy([
        1,
        2,
        3,
        4,
        5,
        6
    ], {
        set: function (o, k, v) {
            f3(128, v3, [
                'use strict',
                12
            ]).v21.TestCase[v7]++;
            o[k] = v;
            return true;
        }
    });
    v1.copyWithin(0, 3);
    return v0 + '' === '0,1,2';
}
if (!f0())
    throw new Error('Test failed');
