(function () {
    function f0(a) {
        return a['1'];
    }
    for (var v0 = 0; v0 < 36; ++v0)
        v0[v0 & 500];
    if (!f0({ 1: true }))
        throw new Error('OUT');
    for (var v0 = 0; v0 < 10000; ++v0)
        f0({ 2: true });
    if (!f0({ 1: true }))
        throw new Error('OUT');
}());
