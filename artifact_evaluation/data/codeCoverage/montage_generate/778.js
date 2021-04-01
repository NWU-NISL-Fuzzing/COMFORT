function f0() {
    return typeof Math.cosh === 'function';
}
if (!f0(2147483647, 30, 4))
    throw new Error('Test failed');
