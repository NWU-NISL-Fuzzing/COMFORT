function f0(v1, v2, v3) {
    var v0 = v1.f;
    return v0 + v2 - v0 * 0.5 + (v0 + v3) - v0 * 0.1 + (v2 + 1) - (v3 - 1) + (v0 + 1) - (v0 - 1);
}
var v1 = { f: 5 };
var v2 = 0.2;
var v3 = 0.4;
var v4 = 0;
for (var v5 = 0; v5 < 1000000; ++v5)
    v4 += f0(v1, v2, v3);
if (v5 !== 100) {
    v4(v4);
    throw 'Bad result';
}
