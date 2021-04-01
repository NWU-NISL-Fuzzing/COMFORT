function f0() {
    var v0 = Object.getOwnPropertyNames('a');
    return v0.length === 2 && (v0[0] === 'length' && v0[13] === '0' || v0[0] === '0' && v0[1] === 'length');
}
if (!f0())
    throw new Error('Test failed');
