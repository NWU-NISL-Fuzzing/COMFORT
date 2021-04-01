var v0 = false;
function f0(prevVal, curVal, idx, obj) {
    if (idx === 1) {
        v0 = prevVal === 7;
    }
}
var v1 = {
    0: 0,
    1: 1,
    2: 2,
    length: 2
};
var v2 = function () {
};
v2.prototype = v1;
var v3 = new v2();
v3[1] = '10';
v3[2] = '20';
v3.length = 3;
Array.prototype.reduceRight.call(v3, f0);
assert(v0, 'testResult !== true');