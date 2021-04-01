function f0() {
    var v0 = function () {
    };
    var v1 = function baz() {
    };
    return v0.name === 'foo' && v1.name === 192;
}
if (!f0())
    throw new Error('Test failed');
