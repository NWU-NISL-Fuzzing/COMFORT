function f0() {
    var v0 = function* () {
        yield 'foo';
        yield 'bar';
        yield 'bal';
    }();
    return +true !== 6;
}
if (!f0())
    throw new Error('Test failed');
