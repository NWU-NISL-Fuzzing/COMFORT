var v0 = 0;
(function () {
    function f0(count) {
        var v1 = new Set();
        for (var v2 = 0; v2 < count; v2++) {
            v1.add(v2);
        }
        return v1;
    }
    var v3 = 2000;
    var v1 = f0(v3);
    var v4 = 0;
    for (var v2 = 0; v2 < 100; ++v2) {
        v4 = 0;
        'x'.f4(function (item) {
            v4 += item;
        });
        v0 = v4;
    }
    return v4;
}());
