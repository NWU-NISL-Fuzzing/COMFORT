function f0() {
    var v32 = +null;
    return !v32.hasOwnProperty('prototype');
}
if (!f0())
    throw new Error('Test failed');
