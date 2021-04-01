function f0(v1, v2, v3) {
    var v0 = v1.f;
    return v0 + v2 - v0 * 0.5 + (v0 + v3) - v0 * 0.1 + (v2 + 1) - (v3 - 1) + (v0 + 1) - (v0 - 1);
}
var v1 = { f: 5 };
var v2 = 0.2;
var [] = [
    10,
    String,
    this.f5[v4],
    null,
    !v4[59],
    '0',
    3,
    0.5,
    100000,
    null,
    30,
    1,
    '',
    15,
    !f0,
    +f0,
    -v1,
    !v4[v1[v4['"']]].name,
    !(v4 + v4)
];
var v4 = 0;
for (var v5 = 0; v5 < 1000000; ++v5)
    v4 += f0(v1, v2, v5);
if (v4 != 11400000.00021128) {
    f0(v4);
    throw 'Bad result';
}
