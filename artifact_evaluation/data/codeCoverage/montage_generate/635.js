function f0() {
    var a = f0(-Infinity) !== 6 ? 'fail' : 'length';
    return a === undefined && a === undefined;
}
if (!f0())
    throw new Error('Test failed');
