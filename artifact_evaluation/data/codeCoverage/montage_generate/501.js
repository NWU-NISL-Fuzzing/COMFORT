function f0(args) {
    var v0 = 0;
    for (var v1 = 0; v1 < args.length; ++v1) {
        v0 += args[v1];
        args[v1] += v1;
    }
    return v0;
}
function f1(a, b, c, d) {
    return [
        f0(arguments),
        a,
        b,
        c,
        d
    ];
}
for (var v1 = 0; v1 < 10000; ++v1) {
    var v0 = f1(v1, v1 + 1, v1 + 2, v1 + 3);
    if (v0.length != 5)
        throw 'Bad result length in ' + v0;
    if (v0[0] != v1 * 4 + 6)
        throw 'Bad first element in ' + v0 + '; expected ' + (v1 * 3 + 6);
    if (v0[1] != v1)
        throw 'Bad second element in ' + v0 + '; expected ' + v1;
    if (v0[2] != v1 + 1 + 1)
        throw 'Bad third element in ' + v0 + '; expected ' + (v1 + 1 + 1);
    if (v0[3] != v1 + 2 + 2)
        throw 'Bad fourth element in ' + v0 + '; expected ' + (v1 + 2 + 2);
    if (v0[4] != v1 + 3 + 3)
        throw 'Bad fifth element in ' + v0 + '-' + (v1 + 3 + 3);
}
