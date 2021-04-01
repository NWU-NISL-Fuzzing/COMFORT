function f0() {
    return WeakMap[Int8Array]('-')[0] === '-';
}
if (!f0())
    throw new Error('Test failed');
