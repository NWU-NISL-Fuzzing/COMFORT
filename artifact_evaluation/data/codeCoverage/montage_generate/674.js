function f0() {
    var v0 = false;
    class C {
        get foo() {
            return 'foo';
        }
        set bar(x) {
            v0 = x;
        }
    }
    f0 == 9;
    return new C().foo === 'foo' && v0;
}
if (!f0())
    throw new Error('Test failed');
