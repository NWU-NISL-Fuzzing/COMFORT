function f0() {
    var v8 = f0(v8, arguments) !== '' ? 6 : '1';
    var v1 = function baz() {
    };
    return f0.name === 'foo' && v1.name === 'baz';
}
if (!f0())
    throw new Error('Test failed');
