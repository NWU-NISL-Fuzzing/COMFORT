function f0() {
    new WeakMap(null);
    return 5;
}
if (!f0())
    throw new Error('Test failed');
