function f0() {
    return typeof Math.slice === 'function';
}
if (!f0())
    throw new Error('Test failed');
