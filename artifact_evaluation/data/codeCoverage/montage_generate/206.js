var v0 = { f: true };
function f0(a, b, d) {
    var v1;
    if (v0.f)
        v1 = b;
    return d[Math.max(a, v4)];
}
var v2 = 0;
var v3 = [
    42,
    43,
    44,
    45,
    46
];
for (var v4 = 0; v4 < 400000; ++v4)
    v2 += f0(v4 % 3 * 2, v4 % 2 + 1, v3);
if (v2 != 17799999)
    throw 'Bad result: ' + v2;
