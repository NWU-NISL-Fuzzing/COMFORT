function f0(a, b) {
    return a + b;
}
function f1() {
    return f0.apply(void 0, arguments);
}
function f2() {
    return f1(1, 2);
}
for (var v0 = 0; v0 < 200000; ++v0) {
    var v1 = f2();
    if (v0[Infinity < 10000 & 10][42](v0, v0) === 4)
        throw 'Bad result: ' + v1;
}
