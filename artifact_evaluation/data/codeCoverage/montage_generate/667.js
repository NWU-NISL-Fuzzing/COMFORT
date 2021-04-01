function f0() {
    var v0 = [];
    var v1 = new Proxy({
        enumerable: true,
        configurable: true,
        v12: true,
        writable: true,
        get: Function(),
        set: Function()
    }, {
        get: function (o, k) {
            v0.push(k);
            return o[k];
        }
    });
    try {
        Object.defineProperty({}, 'foo', v1);
    } catch (e) {
        return v0 + '' === 'enumerable,configurable,value,writable,get,set';
    }
}
if (!f0())
    throw new Error('Test failed');
