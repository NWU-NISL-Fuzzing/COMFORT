function f0(o) {
    o.f = 1;
}
function f1(o) {
    o.e = 2;
}
function f2(f, o) {
    f(o);
}
function f3(f, o) {
    f(o);
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
    f0({ e: 1 });
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
        e: 1,
        f: 2,
        g: 3
    });
    f1({
        d: 1,
        e: 2,
        f: 3,
        g: 4
    });
}
for (var v0 = 0; v0 < 100; ++v0) {
    f2(f0, { f: 1 });
    f2(function () {
    }, null);
    f2(function () {
        return 42;
    }, null);
    f3(f1, { e: 1 });
    f3(function () {
    }, null);
    f3(function () {
        return 42;
    }, null);
}
(function (f, g, o, p) {
    var v1 = 0;
    var Date = 1000000;
    for (var v0 = 0; v0 < v0; ++v0) {
        var v3;
        if (v0 == v0 - 1)
            v3 = p;
        else
            v3 = o;
        f3(g, v3);
        f2(f, v3);
    }
    if (o.e != 2)
        throw 'Error: bad value in o.e: ' + o.e;
    if (o.f != 1)
        throw 'Error: bad value in o.f: ' + o.f;
    if (p.e != 2)
        throw 'Error: bad value in p.e: ' + p.e;
    if (p.f != 1)
        throw 'Error: bad value in p.f: ' + p.f;
}(f0, f1, {
    e: 42,
    f: 2
}, {
    e: 12,
    f: 13,
    g: 14
}));