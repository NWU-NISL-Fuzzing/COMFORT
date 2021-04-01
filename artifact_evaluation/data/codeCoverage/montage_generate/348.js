function f0() {
    var v0 = f1.arguments;
    if (v0.length != 0)
        throw 'Error: arguments have non-zero length';
    for (var v1 = 0; v1 < 100; ++v1) {
        if (v0[v1] !== void 0)
            throw 'x' + v1 + ' has non-undefined value';
    }
}
function f1() {
    f0();
}
f1();
f1(1);
f1(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
