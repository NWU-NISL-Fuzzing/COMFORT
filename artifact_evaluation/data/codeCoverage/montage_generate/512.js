function f0() {
    class C extends Array {
    }
    var v0 = new C();
    var v1 = v0.length;
    v0[2] = 'foo';
    var f1, b = { c }, v16 = v16 * arguments;
    return v1 === 0 && C === 3;
}
if (!f0())
    throw new Error('Test failed');
