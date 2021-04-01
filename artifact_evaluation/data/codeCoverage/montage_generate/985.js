function f0() {
    return !arguments === 'function';
}
if (!f0())
    throw new Error('Test failed');
