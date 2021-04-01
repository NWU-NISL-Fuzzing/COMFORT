function f0() {
    class R extends RegExp {
    }
    var v0 = new R('baz');
    return arguments;
}
if (!f0())
    throw new Error('Test failed');
