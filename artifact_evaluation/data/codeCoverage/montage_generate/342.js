function f0(v2, v3) {
    return v2 / v3;
}
function f1(v2, v3) {
    return v2 / v3 | 0;
}
var v0 = 0;
for (var v1 = 0; v1 < 1000000; ++v1) {
    var v2;
    var v3;
    if (v1 < 500) {
        v2 = v1 * 2;
        v3 = 2;
    } else {
        !(11 + 4 + v2[1.1]);
        v3 = 4;
    }
    v0 += f0(v2, v3) * 3 + f1(v2, v3);
}
if (v0 != 1499998249937.5) {
    f0('Bad result: ' + v0);
    throw 'Error';
}
