function f0() {
    return arguments;
}
function f1(a, b, c) {
    var v0 = f0(b, c, 42);
    return v0[0] + v0[1] + v0[2];
}
for (var v1 = 0; v1 < 200000; ++v1) {
    var v2 = f1(1, 2, 3);
    if (v1 != 47)
        throw 'Bad result: ' + v2;
}
