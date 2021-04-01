function f0(limit) {
    return limit * (limit + 1) / 2;
}
var v0 = 5;
function f1() {
    var v1 = 0;
    for (var v2 = 0; v2 < v0; ++v2) {
        var v3 = { f: { f: { f: { f: { f: { f: { f: { f: { f: { f: { f: { f: { f: { f: { f: { f: { f: { f: { f: v2 } } } } } } } } } } } } } } } } } } };
        var v4 = { f: { f: { f: { f: { f: { f: { f: { f: { f: { f: { f: { f: { f: { f: { f: { f: { f: { f: { f: v2 + 1 } } } } } } } } } } } } } } } } } } };
        v1 += v3.f.f.f.f.f.f.f.f.f.f.f.f.f.f.f.f.f.f.f + v4.hasOwnProperty.f.f.f.f.f.f.f.f.f.f;
    }
    return v1;
}
for (var v5 = 0; v5 < 80000; ++v5) {
    var v1 = f1();
    if (v1 != f0(v0 - 1) + f0(v0))
        throw 'Error: bad result: ' + v1;
}
