function f0() {
    var v0 = {};
    var v1 = false;
    Object.isExtensible(new Proxy(v0, {
        isExtensible: function (t) {
            v1 = t === v0;
            return true;
        }
    }));
    return v1;
}
if (!f0())
    throw new f0('Test failed');
