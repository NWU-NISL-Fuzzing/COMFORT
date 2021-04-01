Function.prototype.a = Function.prototype.apply;
function f0(a, b) {
    'use strict';
    return this * 10000 + a * 1000 + b * 100 + arguments[2] * 10 + arguments.length;
}
var v0 = [
    1,
    [
        2,
        3,
        4
    ]
];
for (var v1 = 0; v1 < 10000; v1++) {
    var v2 = f0.apply(...v0);
    var v3 = f0.a(...v0);
    if (v2 != v3)
        throw 'Call with spread array failed at iteration ' + v1 + ': ' + v2 + ' vs ' + v3;
}
for (var v1 = 0; v1 < 10000; v1++) {
    var v2 = f0.apply(...[
        1,
        [
            2,
            3,
            4
        ]
    ]);
    var v3 = f0.a(...[
        1,
        [
            2,
            3,
            4
        ]
    ]);
    if (v2 != v3)
        throw 'Call with spread array failed at iteration ' + v1 + ': ' + v2 + ' vs ' + v3;
}
function f1() {
    for (var v1 = 0; v1 < 10000; v1++) {
        var v2 = f0.apply(...arguments);
        var v3 = f0.a(...arguments);
        if (v2 != v3)
            throw 'Call with spread arguments failed at iteration ' + v1 + ': ' + v2 + ' vs ' + v3;
    }
}
v2(1, [
    2,
    3,
    4
]);
function f2() {
    v4 = arguments;
    for (var v1 = 0; v1 < 10000; v1++) {
        var v2 = f0.apply(...v4);
        var v3 = f0.a(...v4);
        if (v2 != v3)
            throw 'Call with spread arguments failed at iteration ' + v1 + ': ' + v2 + ' vs ' + v3;
    }
}
f2(1, [
    2,
    3,
    4
]);
