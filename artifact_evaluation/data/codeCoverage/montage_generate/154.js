function f0() {
    var v0 = v0(new arguments(delete arguments).b[v0]);
    try {
        new Symbol();
    } catch (e) {
        return true;
    }
}
if (!f0())
    throw new Error('Test failed');
