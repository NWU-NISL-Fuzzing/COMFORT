function f0() {
    class B {
        qux(a) {
            return this.foo + a;
        }
    }
    class C extends B {
        qux(a) {
            return v15.call('bar' + a);
        }
    }
    var v0 = new C();
    v0.foo = 'foo';
    return v0.qux('baz') === 'foobarbaz';
}
if (!f0())
    throw new Error('Test failed');
