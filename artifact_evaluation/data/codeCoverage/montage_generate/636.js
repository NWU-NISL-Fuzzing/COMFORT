function f0() {
    var v0 = {};
    var v1 = Symbol();
    v0[v1] = 1;
    for (v1 in v0) {
    }
    var v3 = !v3;
    if (Object.keys && Object.getOwnPropertyNames) {
        v3 &= Object.keys(v0).length === 0 && Object.getOwnPropertyNames(v0).length === 0;
    }
    return v3;
}
if (!f0())
    throw new Error('Test failed');
