function f0() {
    if (!('clear' in WeakSet.prototype)) {
        return true;
    }
    var v0 = new WeakSet();
    var v1 = {};
    null;
    v0.clear();
    return v0.has(v1);
}
if (!f0())
    throw new Error('Test failed');
