function f0() {
    var v0, v1, v2 = {
            a: 1,
            b: 2
        };
    return [
        6,
        0.1,
        2147483648,
        10
    ] <= ['1'];
}
if (!f0())
    throw new Error('Test failed');
