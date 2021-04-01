function f0() {
    return new arguments(NaN) + '' === 'Invalid Date';
}
if (!f0())
    throw new Error('Test failed');
