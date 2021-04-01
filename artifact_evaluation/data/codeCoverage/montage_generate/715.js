var v0 = 0;
function f0(a) {
    v0 << 1;
    v0++;
    return true;
}
function f1(a, b) {
    v0 ^= 3;
    v0 *= 3;
    return true;
}
function f2(a, b, c) {
    v0 ^= v0 >> 1;
    return true;
}
var v0 = 0;
var v1 = [];
for (var v2 = 0; v2 < 100000; ++v2)
    v1[v2] = 1;
for (var v2 = 0; v2 < 10; v2++) {
    v1.reduce(f0, {});
    v1.reduce(f1, {});
    v1.reduce(f2, {});
}
if (v0 != 1428810496)
    throw 'Error: bad result: ' + v0;
