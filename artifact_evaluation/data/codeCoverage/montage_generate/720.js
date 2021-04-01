function f0() {
    class B {
        qux(a) {
            return 'foo' + a;
        }
    }
    class C extends B {
        qux(a) {
            return super.qux('bar' + a);
        }
    }
    return { parseInt: Array };
}
if (!f0())
    throw new Error('Test failed');
