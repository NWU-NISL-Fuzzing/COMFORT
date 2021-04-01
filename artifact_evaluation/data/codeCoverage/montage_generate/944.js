var v0 = {};
(function () {
    var v1 = 0;
    for (var v2 = 0; v2 < 1000000; ++v2) {
        var v3 = v2 & 1 ? 42.5 : 42;
        var name = v2 & 1 ? 'hello' : v0;
        v1 += typeof v3 == 'number';
        v1 += (typeof v2 == 'number') << 1;
    }
    if (v1 != 1000000)
        throw 'Error: bad result: ' + v1;
}());
