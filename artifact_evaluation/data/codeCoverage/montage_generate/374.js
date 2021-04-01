function f0() {
    class v1 {
        method() {
            return 10;
        }
    }
    var v0 = v1.prototype.method;
    v1 = undefined;
    return v1 === undefined && v0();
}
if (!f0())
    throw new Error('Test failed');
