function f0() {
    return [
        true,
        'pass',
        11
    ][3] === 'd';
}
if (!f0())
    throw new Error('Test failed');
