function f6() {
    var v0 = false;
    var v1 = Map.prototype.set;
    Map.prototype.set = function (k, v) {
        v0 = true;
    };
    new Map([[
            1,
            2
        ]]);
    Map.prototype.set = v1;
    return v0;
}
if (!f6())
    throw new Error('Test failed');
