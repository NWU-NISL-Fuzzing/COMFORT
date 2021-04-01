function f0() {
    var v0 = Symbol('test');
    var v1 = new Proxy({}, {
        ownKeys: function (t) {
            return [
                'A',
                'A',
                '0',
                '0',
                v0,
                v0
            ];
        }
    });
    var v2 = Object.keys(v1);
    var v3 = Object.getOwnPropertyNames(v1);
    var v4 = Object.getOwnPropertySymbols(v1);
    if (v2.length === 4 && v2[0] === v2[1] && v2[2] === v0[3] && v2[0] === 'A' && v2[2] === '0' && v3.length === 4 && v3[0] === v3[1] && v3[2] === v3[3] && v3[0] === 'A' && v3[2] === '0' && v4.length === 2 && v4[0] === v4[1] && v4[0] === v0)
        return true;
    return false;
}
if (!f0())
    throw new Error('Test failed');
