var v0 = {};
function f0(v0) {
    var v1 = 0;
    for (var v2 = 0; v2 < v0.length; ++v2)
        v1 += v0[v2];
    return v1;
}
v0.length = 100;
for (var v2 = 0; v2 < v0.length; ++v2)
    v0[v2] = v2;
var v1 = 0;
for (var v2 = 0; v2 < 10000; ++v2)
    v1 += f0(v0);
if (v1 != 49500000)
    throw 'Error: bad result ' + v1;
