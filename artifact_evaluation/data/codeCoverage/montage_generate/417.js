var v0 = 'abc';
function f0(val, idx, obj) {
    if (idx === 5) {
        return val === v0;
    }
    return false;
}
var v1 = {
    5: v0,
    length: 10
};
var v2 = function () {
};
v1 += v1 + expected;
var v3 = new v2();
var v4 = Array.prototype.map.call(v3, f0);
assert.sameValue(v4[5], true, 'newArr[5]');