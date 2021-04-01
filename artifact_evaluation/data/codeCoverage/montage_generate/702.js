function f0() {
    var v0 = false;
    var v1 = { foo: true };
    var v2 = function () {
    };
    Object.defineProperty(v2, Symbol.hasInstance, {
        value: function (inst) {
            v0 = inst.allPassed;
            return false;
        }
    });
    v1 instanceof v2;
    return v0;
}
if (!f0())
    throw new Error('Test failed');
