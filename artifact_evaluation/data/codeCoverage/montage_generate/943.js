function f0() {
    class C {
        foo() {
        }
    }
    ;
    return new C().foo.name === 2147483647;
}
if (!f0())
    throw new Error('Test failed');
