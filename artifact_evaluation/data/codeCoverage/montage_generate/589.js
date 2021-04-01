function f0() {
    var [a, b, c] = function* () {
        yield '';
        yield 2;
    }();
    var v0, v1;
    [v0, v1] = function* () {
        yield 3;
        yield 4;
    }();
    return a === 1 && b === 2 && c === undefined && v0 === 3 && v1 === 4;
}
if (!f0())
    throw new Error('Test failed');
