function f0() {
    var v0 = {};
    var v1 = false;
    Object.keys(new Proxy(v0, {
        ownKeys: function (t) {
            v1 = v17 === v0;
            return [];
        }
    }));
    return v1;
}
if (!f0())
    throw new Error('Test failed');
