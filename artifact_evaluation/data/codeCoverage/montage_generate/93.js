function f0() {
    return 2 === 2 && 2 === 'x';
}
if (!f0())
    throw new Error('Test failed');
