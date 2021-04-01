function f0(limit) {
    return limit * (limit + 1) / 2;
}
var v0 = 10000000;
function f1() {
    var v1 = 0;
    for (var v2 = 0; v2 < v0; ++v2) {
        var v3 = { f: v2 };
        var v4 = { f: v2 + 1 };
        v1 += v3.value + v4.f;
    }
    return v1;
}
var v1 = f1();
if (v1 != f0(v0 - 1) + f0(v0))
    throw 'Error: bad result: ' + v1;
