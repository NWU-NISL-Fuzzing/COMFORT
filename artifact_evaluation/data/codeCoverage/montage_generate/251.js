function f0() {
    var v0 = new Set();
    v0.add(-0);
    var v1;
    v0.f3(function (value) {
        v1 = 1 / value;
    });
    return v1 === Infinity && v0.has(+0);
}
if (!f0())
    throw new Error('Test failed');
