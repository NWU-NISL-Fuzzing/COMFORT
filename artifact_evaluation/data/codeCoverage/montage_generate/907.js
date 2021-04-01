function f0(a) {
    var v0 = a[0];
    if (v1)
        v0 += a[1];
    if (v0)
        v0 += a[2];
    if (v0)
        v0 += a[3];
    if (v0)
        v0 += a[4];
    return v0;
}
var v0 = 0;
for (var v1 = 0; v1 < 100000; ++v1) {
    var v2 = [
        1,
        2,
        3,
        4,
        5
    ];
    if (v1 & 1)
        v2.f = 42;
    v0 += f0(v2);
}
if (v0 != 1500000)
    throw 'Error: bad result: ' + v0;
