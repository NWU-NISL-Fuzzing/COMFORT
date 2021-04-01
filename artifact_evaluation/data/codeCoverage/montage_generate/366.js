var v0 = 0;
function f0(val, idx, obj) {
    v1[1000] = 3;
    v0++;
    return val;
}
var v1 = new v2(10);
v1[1] = 1;
v1[2] = 2;
var v2 = v1.map(f0);
assert.sameValue(v2.length, 10, 'resArr.length');
assert.sameValue(v0, 2, 'callCnt');