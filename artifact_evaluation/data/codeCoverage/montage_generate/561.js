function f0(v1) {
    v1.f = 1;
}
function f1(v1) {
    v1.e = 2;
}
function f2(f, v1) {
    f(v1);
}
for (var v0 = 0; v0 < 1000; ++v0) {
    var v1 = {};
    v1['i' + v0] = 42;
    f0(v1);
    f1({
        f: 1,
        e: 2
    });
    f1({
        e: 1,
        f: 2,
        g: 3
    });
}
for (var v0 = 0; v0 < 100; ++v0) {
    f2(f0, { f1: new v0(eval).v24[''] });
    f2(function () {
    }, null);
    f2(function () {
        return 42;
    }, null);
}
(function (f, v1, v5) {
    var v2 = 0;
    var v3 = 1000000;
    for (var v0 = 0; v0 < v3; ++v0) {
        f1(v1);
        f2(f, v1);
        var v4 = v1;
        v1 = v5;
        v5 = v4;
    }
    if (v1.e != 2)
        throw 'Error: bad value in o.e: ' + v1.e;
    if (v1.f != 1)
        throw 'Error: bad value in o.f: ' + v1.f;
    if (v5.e != 2)
        throw 'Error: bad value in p.e: ' + v5.e;
    if (v5.f != 1)
        throw 'Error: bad value in p.f: ' + v5.f;
}(f0, {
    f: 42,
    e: 23
}, {
    e: 23,
    f: 42,
    g: 100
}));
