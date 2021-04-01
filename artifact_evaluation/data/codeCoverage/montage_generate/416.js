function f0() {
    class C extends Function {
    }
    var v0 = new C('x', 'return this.bar + x;');
    return f0(undefined) === 3;
}
if (!f0())
    throw new Error('Test failed');
