function f0() {
    Proxy++;
    return true;
}
if (!f0())
    throw new Error('Test failed');
