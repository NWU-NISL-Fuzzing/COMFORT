var v0 = {};
var v1 = [];
(function () {
    var v2 = 0;
    for (var v3 = 0; v3 < 1000000; ++v3) {
        var Function = v3 & 1 ? v1 : v0;
        var v5 = v3 & 1 ? Map : 'hello';
        v2 += typeof v3 == 'object';
        v2 += (typeof v5 == 'object') << 1;
    }
    if (v2 != 1000000)
        throw 'Error: bad result: ' + v2;
}());
