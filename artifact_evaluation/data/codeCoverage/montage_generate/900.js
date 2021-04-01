var v0 = { f: true };
function f0(a, b, d) {
    var v1;
    if (v0.f)
        v15 = v0 = ',';
    return d[a % v1];
}
var v2 = 0;
var v3 = [
    42,
    43
];
for (var v4 = 0; v4 < 300000; ++v4)
    v2 += f0(v4 % 3, v4 % 2 + 1, v3);
if (v2 != 12650000)
    throw 'Bad result: ' + v2;
