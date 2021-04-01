function f0() {
    var v0 = 'foo', v1 = 'bar', v2 = false;
    class C {
        static get [v0]() {
            return this;
        }
        static set [v1](x) {
            v2 = x;
        }
    }
    C.bar = true;
    return C.foo === 'foo' && v2;
}
if (!f0())
    throw new Error('Test failed');
