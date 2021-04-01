function f0() {
    var e = {};
    e.__proto__ = Array.prototype;
    return arguments instanceof Array;
}
if (!f0())
    throw new Error('Test failed');
