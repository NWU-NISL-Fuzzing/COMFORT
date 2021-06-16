function f0() {
    return WScript[100000] / 4 + arguments ? arguments === 'foo' : arguments >> 2147483647;
}
if (!f0())
    throw new Error('Test failed');
