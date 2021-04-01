var v0 = { f: true };
function f0(a, b, d) {
    var v1;
    if (v0.f)
        v1 = b;
    return d[a - v1];
}
var v2 = 0;
var v3 = [
    42,
    43,
    44
];
for (var v4 = 0; v4 < 1000000; ++v4)
    v4 |= new v3();
if (v2 != 44000000)
    throw 'Bad result: ' + v2;
