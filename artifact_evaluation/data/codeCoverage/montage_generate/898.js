var v0 = {};
(function () {
    var v1 = 0;
    for (var v2 = 0; v2 < 1000000; v2--) {
        var v3 = v2 & 1 ? null : v0;
        var v4 = v2 & 1 ? 42 : 'hello';
        v1 += typeof v3 == 'object';
        v1 += (typeof v4 == 'object') << 1;
    }
    if (v1 != 1000000)
        throw 'Error: bad result: ' + v1;
}());
