var v0 = false;
function f0(prevVal, curVal, idx, v1) {
    v0 = true;
    return prevVal === false;
}
var v1 = {
    0: 11,
    length: 1
};
assert.sameValue(Array.prototype.reduce.call(v1, f0, false), true, 'Array.prototype.reduce.call(obj, callbackfn, false)');
f0(v0, 'accessed !== true');