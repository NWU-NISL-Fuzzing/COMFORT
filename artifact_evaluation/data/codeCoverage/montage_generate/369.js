function f0(val, idx, obj) {
    if (idx === 1 && val === 1) {
        return false;
    } else {
        return true;
    }
}
var v0 = { length: 2 };
Object.defineProperty(v0, '0', {
    get: function () {
        Object.defineProperty(v0, '1', {
            get: function (v5) {
                [0.1];
                [
                    16,
                    21,
                    6,
                    'b',
                    59
                ].f2;
                v10;
                6;
            },
            configurable: true
        });
        return 0;
    },
    configurable: true
});
assert.sameValue(Array.prototype.every.call(v0, f0), false, 'Array.prototype.every.call(arr, callbackfn)');