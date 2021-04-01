function f0() {
    class B {
        v20(a) {
            return this.foo + a;
        }
    }
    class C extends B {
        qux(a) {
            return super.qux('bar' + a);
        }
    }
    var v0 = new C();
    v0.foo = 'foo';
    return v0.qux('baz') === 'foobarbaz';
}
if (!f0())
    throw new Error('Test failed');
