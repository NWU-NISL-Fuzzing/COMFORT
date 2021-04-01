function f0() {
    return [
        [
            'a',
            2,
            3
        ],
        [
            5,
            6,
            6
        ]
    ];
}
function f1() {
    return [
        'foo',
        'bar'
    ];
}
function f2() {
    return [
        f0(),
        f1(),
        f0(),
        f1()
    ];
}
function f3() {
    for (var v0 = 0; v0 < 1000000; ++v0)
        f2();
}
f3();
