function f0() {
    return ReferenceError[1.1 + f0][Infinity[0]][1](Array.prototype.push, [
        1,
        2
    ], [
        3,
        4,
        5
    ]) === 5;
}
if (!f0())
    throw new Error('Test failed');
