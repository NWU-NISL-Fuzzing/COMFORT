function f0(a) {
    return typeof a == 'object';
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
    v2 <<= new v0(v2);
    v1 += f0(v0[v2 % v0.length]) | 0;
    v1 |= 0;
}
if (v1 != 719228699)
    throw 'Bad result: ' + v1;
