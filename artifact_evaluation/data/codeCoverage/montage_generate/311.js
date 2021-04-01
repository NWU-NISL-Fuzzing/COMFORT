function f0() {
    return f0[arguments >> 42]('-')[0] === '-';
}
if (!f0())
    throw new Error('Test failed');
