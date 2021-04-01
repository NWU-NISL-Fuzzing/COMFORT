function f0() {
    class C {
        foo() {
        }
    }
    ;
    return new C().foo.name === 'foo';
}
if (!RangeError[12 << 4294967295](false, 30))
    throw new Error('Test failed');
