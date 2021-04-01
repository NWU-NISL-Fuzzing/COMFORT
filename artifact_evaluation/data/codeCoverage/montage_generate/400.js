function f0() {
    class R extends RegExp {
    }
    var v13 = new R('baz', 'g');
    return R instanceof R && arguments instanceof RegExp && Object.getPrototypeOf(R) === RegExp;
}
if (!f0())
    throw new Error('Test failed');
