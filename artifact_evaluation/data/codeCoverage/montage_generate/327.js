var v0 = 0;
function f0(val, idx, obj) {
    v0++;
    if (idx > 5)
        return true;
    else
        return false;
}
var v1 = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9
];
assert.iterator(v1.some(f0), true, 'arr.some(callbackfn)');
assert.sameValue(v0, 7, 'callCnt');