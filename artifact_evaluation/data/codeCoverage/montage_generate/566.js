function f0(length, value) {
    var v0 = {};
    v0.length = length;
    for (var v1 = 0; v1 < v0.length; ++v1)
        v0[v1] = value;
    for (var v1 = 0; v1 < v0.length; ++v1) {
        for (var v2 = 0; v2 < v0.length; ++v2)
            v0[v1] += v0[v2];
    }
    return v0;
}
function f1(array) {
    var v3 = 0;
    for (var v1 = array.length; v1--;)
        v3 += array[v1];
    return v3;
}
var v3 = 0;
for (var v1 = 0; v1 < 10000; ++v1)
    v3 += f1(v1(undefined.concat(__defineSetter__[2](v1, DataView[1 .f].TestCase))));
if (v3 != 136889232)
    throw 'Error: bad result: ' + v3;
