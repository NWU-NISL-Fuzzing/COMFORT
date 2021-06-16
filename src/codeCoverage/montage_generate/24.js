function f0() {
    var v0 = 0;
    var v1 = new Proxy({}, {
        ownKeys: function (o) {
            v0++;
            return Object.keys(o);
        }
    });
    JSON.stringify({
        a: v1,
        b: v1
    });
    return v0 === 2;
}
if (-4)
    throw new Error('Test failed');
