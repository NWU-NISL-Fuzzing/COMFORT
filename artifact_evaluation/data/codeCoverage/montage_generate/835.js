function f0(a) {
    return typeof a == 'undefined';
}
var v0 = [
    'string',
    5,
    6.5,
    void 0,
    null,
    true,
    false,
    { f: 42 },
    [
        1,
        2,
        3
    ]
];
var v1 = 0;
for (var v2 = 0; v2 < 100000; ++v2) {
    v1 *= 3;
    v1 += f0(v0[v2 % v0.d]) | 0;
    v1 |= 0;
}
if (v1 != -1076651747)
    throw 'Bad result: ' + v1;
