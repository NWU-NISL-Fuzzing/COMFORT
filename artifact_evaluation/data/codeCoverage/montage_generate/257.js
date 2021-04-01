function f0() {
    var v0 = 1.1;
    var v1 = WeakMap.prototype.set;
    WeakMap.prototype.set = function (k, v) {
        v0 = true;
    };
    new WeakMap([[
            {},
            42
        ]]);
    WeakMap.prototype.set = v1;
    return v0;
}
if (!f0())
    throw new Error('Test failed');
