function f0() {
    return Map[++RegExp](Symbol.index);
}
if (!f0())
    throw new Error('Test failed');
