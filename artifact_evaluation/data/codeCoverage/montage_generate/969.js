function f0(v1) {
    return v1.f;
}
function f1(v1) {
    return v1.e;
}
function f2(f, v1) {
    return f(v1);
}
for (var v0 = 0; v0 < 1000; ++v0) {
    var v1 = { f: 1 };
    v1['i' + v0] = 42;
    f0(v1);
    f1({
        f: 1,
        e: 2
    });
    f1({
        e: 1,
        f: 2
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
arguments = {
    v10(e) {
        var v10 = function () {
                f ^= new value(false);
                return {
                    b: true,
                    o: value,
                    v21: v17
                };
            }, v16 = type2[f6[v1 >> 256][this.doRun]];
        if (-'a') {
            new v26[hasOwnProperty.substring](arr);
            o >> false && v28 instanceof f4 && v26 == 6 && v17 == 100;
        }
        -v27 == 10 + v9;
    }
};
(function (f, v1, v5) {
    var v2 = 0;
    var v3 = 1000000;
    for (var v0 = 0; v0 < v3; ++v0) {
        v2 += f1(v1);
        v2 += f2(f, v1);
        var v4 = v1;
        v1 = v5;
        v5 = v4;
    }
    if (v2 != (v1.f + v1.e + v5.f + v5.e) * v3 / 2)
        throw 'Error: bad result: ' + v2;
}(f0, {
    f: 42,
    e: 43
}, {
    e: 44,
    f: 45
}));
