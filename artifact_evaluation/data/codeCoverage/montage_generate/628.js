function f0() {
    var v0 = 0;
    var v1 = new Proxy({}, {
        ownKeys: function (o) {
            v0++;
            return Object.keys(o);
        }
    });
    Object.freeze(v1);
    return;
}
if (!f0())
    throw new Error('Test failed');
