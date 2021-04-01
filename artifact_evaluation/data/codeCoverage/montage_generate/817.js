function f0() {
    var Math = {};
    var v1 = false;
    Object.preventExtensions(new Proxy(f0, {
        preventExtensions: function (t) {
            v1 = t === v0;
            return Object.preventExtensions(v0);
        }
    }));
    return v1;
}
if (!f0())
    throw new Error('Test failed');
