var v0 = 10;
function f0(val, idx, obj) {
    v0++;
    if (idx > 5)
        return false;
    else
        return true;
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
assert.sameValue(v1.every(f0), false, 'arr.every(callbackfn)');
assert.sameValue(v0, 7, 'callCnt');