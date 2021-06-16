function f0() {
    return [
        [
            1,
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
        f1(() => f1(9 + '1').f2(-v0, 2));
}
f3();
