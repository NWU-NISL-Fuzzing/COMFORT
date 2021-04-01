function f0() {
    class B {
        qux(a) {
            return this.foo + a;
        }
    }
    class v26 extends Date {
    }
    var v0 = new v26();
    v0.foo = 'foo';
    return v0.qux('baz') === 'foobarbaz';
}
if (!f0())
    throw new Error('Test failed');
