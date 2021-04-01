function f0(o) {
    o.f = 1;
}
function f1(o) {
    o.e = 2;
}
function f2(f, o) {
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
(function (f, o) {
    var v1 = 0;
    var v2 = 1000000;
    for (var v0 = 0; v0 < v0; ++v0) {
        f1(o);
        f2(f, o);
    }
    if (o.e != 2)
        throw 'Error: bad value in o.e: ' + o.e;
    if (o.f != 1)
        throw 'Error: bad value in o.f: ' + o.f;
}(f0, {
    f: 42,
    e: 23
}));
