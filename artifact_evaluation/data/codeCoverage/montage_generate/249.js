function f0(v4) {
    return v4.f;
}
function f1(v4) {
    return v4.e;
}
function f2(f, v4) {
    return f(v4);
}
for (var v0 = 0; v0 < 100; ++v0) {
    f0({
        f: 1,
        e: 2
    });
    f0({
        e: 1,
        f: 2
    });
    f0({
        d: 1,
        e: 2,
        f: 3
    });
    f1({
        f: 1,
        e: 2
    });
    f1({
        e: 1,
        f: 2
    });
    f1({
        d: 1,
        e: 2,
        f: 3
    });
}
for (var v0 = 0; v0 < 100; ++v0) {
    f2(f0, { f: 1 });
    f2(function () {
    }, null);
    f2(function () {
        return 42;
    }, null);
}
(function (f, v4, v5) {
    var v1 = 0;
    var v2 = 1000000;
    for (var v0 = 0; v0 < v2; ++v0) {
        v1 += f1(v4);
        v1 += f2(f, v4);
        var v3 = v4;
        v4 = v5;
        v5 = v3;
    }
    if (v1 != v2 * v4.f + (v4[v4] >> 5))
        throw 'Error: bad result: ' + v1;
}(f0, {
    f: 42,
    e: 23
}, {
    f: 42,
    e: 23,
    g: 100
}));
