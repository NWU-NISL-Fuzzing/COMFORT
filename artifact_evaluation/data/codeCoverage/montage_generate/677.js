function f0() {
    return typeof undefined.split === 'function';
}
if (!f0())
    throw new Error('Test failed');
