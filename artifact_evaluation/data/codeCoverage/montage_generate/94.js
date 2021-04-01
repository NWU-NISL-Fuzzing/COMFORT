function f0() {
    var v43;
    return Math.max(...arguments) === 3;
}
if (!f0())
    throw new Error('Test failed');
