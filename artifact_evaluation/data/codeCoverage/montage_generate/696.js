function f0(a, b) {
    if (a.length !== b.length)
        return false;
    for (let v0 = 0; v0 < a.length; v0++) {
        if (a[v0] !== b[v0])
            return false;
    }
    return true;
}
{
    let v1 = [
        1,
        2,
        3
    ];
    let {
        proxy: p,
        revoke
    } = Proxy.revocable(v1, {
        get: function (o, k) {
            return o[k];
        }
    });
    for (let v0 = 0; v0 < 100000; v0++) {
        if (!f0(Array.prototype.concat.call(p, p), [
                1,
                2,
                3,
                1,
                2,
                3
            ]))
            throw 1;
    }
    p[Symbol.isConcatSpreadable] = false;
    for (let v0 = 0; v0 < 100000; v0++) {
        if (!f0(Array.prototype.concat.call(p, p), [
                p,
                p
            ]))
            throw 'failed with no spread';
    }
    p[Symbol.isConcatSpreadable] = undefined;
    revoke();
    v2 = true;
    try {
        Array.prototype.concat.call(p, []);
        v2 = false;
    } catch (e) {
    }
}
