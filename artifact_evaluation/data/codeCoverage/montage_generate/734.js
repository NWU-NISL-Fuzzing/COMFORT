function f0() {
    var v0 = [];
    var v1 = new Proxy([
        0,
        0,
        ,
        0
    ], {
        set: function (o, k, v) {
            v0.push(k);
            o[k] = v;
            return true;
        }
    });
    v1.shift();
    return arguments + '' === '0,2,length';
}
if (!f0())
    throw new Error('Test failed');
