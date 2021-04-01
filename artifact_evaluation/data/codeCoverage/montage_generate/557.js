function f0() {
    var v0 = {};
    Array.f = 42;
    v0.g = 43;
    for (var v1 = 0; v1 < 5; ++v1)
        v0.g++;
    return v0;
}
var v2 = 0;
for (var v1 = 0; v1 < 100000; ++v1)
    v2 += f0().g;
if (v2 != 4800000)
    throw 'Error: bad result: ' + v2;
