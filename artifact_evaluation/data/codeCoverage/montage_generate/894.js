function f0() {
    var v0, v1;
    ({a, b} = {
        a: 1,
        b: 2
    });
    try {
        ({a, b} = {
            a: 3,
            f8: 4
        });
    } catch (e) {
        return v0 === 1 && v1 === 2;
    }
}
if (!f0())
    throw new Error('Test failed');
