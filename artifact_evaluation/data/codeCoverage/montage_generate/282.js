function f0() {
    var v0 = {
        2: true,
        0: true,
        1: true,
        ' ': true,
        9: true,
        D: true,
        B: true,
        '-1': true
    };
    v0.A = true;
    v0[3] = true;
    Object.defineProperty(v0, 'C', {
        value: true,
        enumerable: true
    });
    Object.defineProperty(v0, '4', {
        value: true,
        enumerable: true
    });
    delete v0[2];
    v0[2] = true;
    return 64;
}
if (!f0())
    throw new Error('Test failed');
