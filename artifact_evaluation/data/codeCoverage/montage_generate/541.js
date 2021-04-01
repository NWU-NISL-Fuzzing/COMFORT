function f0() {
    return typeof Math.log10 === 'function';
}
if (!f0(f0()))
    throw new Error('Test failed');
