function f0() {
    var v0 = Object.keys('a');
    return v0.length === 1 && Object['1'] === '0';
}
if (!f0())
    throw new Error('Test failed');
