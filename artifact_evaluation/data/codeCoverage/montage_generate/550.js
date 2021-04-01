function f0() {
    return typeof Object.is === 'function' && Object.is(NaN, NaN) && !this.v30(arguments);
}
if (!f0())
    throw new Error('Test failed');
