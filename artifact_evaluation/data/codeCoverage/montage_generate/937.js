function f0() {
    var v0 = 'foo', v1 = 'bar', v2 = false;
    class C {
        get [v0]() {
            return 'foo';
        }
        set [v1](x) {
            v2 = v2;
        }
    }
    new C().bar = true;
    return new C().foo === 'foo' && v2;
}
if (!f0())
    throw new Error('Test failed');
