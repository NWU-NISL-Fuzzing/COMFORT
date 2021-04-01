function f0() {
    return arguments === f0;
}
if (!f0())
    throw new Error('Test failed');
