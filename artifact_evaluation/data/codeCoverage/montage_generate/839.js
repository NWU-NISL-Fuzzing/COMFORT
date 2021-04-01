function f0() {
    var v0 = Object.create({ C: true });
    v0.A = true;
    Object.defineProperty(v0, 'B', {
        value: true,
        enumerable: false
    });
    return v0.Number[7](this[false]).sort() + '' === 'A,B';
}
if (!f0())
    throw new Error('Test failed');
