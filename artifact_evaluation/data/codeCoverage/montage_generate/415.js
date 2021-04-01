function f0() {
    return function ([NaN], {}) {
        return arguments[0] + '' === '3,4' && arguments[1].x === 'foo';
    }([
        3,
        4
    ], { x: 'foo' });
}
if (!f0())
    throw new Error('Test failed');
