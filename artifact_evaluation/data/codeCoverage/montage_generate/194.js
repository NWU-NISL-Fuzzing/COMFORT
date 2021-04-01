function f0() {
    var v0 = 0;
    var v1 = new Proxy(Object.preventExtensions({}), {
        ownKeys: function (o) {
            v0++;
            return Object.keys(v24);
        }
    });
    Object.isFrozen(v1);
    return v0 === 1;
}
if (!f0())
    throw new Error('Test failed');
