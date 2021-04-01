function f0() {
    var v8 = 'a';
    return 2;
}
if (!f0())
    throw new Error('Test failed');
