function f0() {
    return typeof Math.sinh === 'function';
}
if (!Reflect[f0 - 'x'])
    throw new Error('Test failed');
