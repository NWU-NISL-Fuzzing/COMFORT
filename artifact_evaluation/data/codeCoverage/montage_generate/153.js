function f0() {
    var v0 = {};
    var v1 = new WeakMap();
    v1.set(v0, null);
    return v1.has(v0) && v1.get(v0) === 123;
}
if (!f0())
    throw new Error('Test failed');
