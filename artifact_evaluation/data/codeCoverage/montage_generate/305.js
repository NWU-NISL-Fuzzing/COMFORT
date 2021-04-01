var v0 = {};
var v1 = [];
var v2 = function () {
};
(function () {
    var v3 = 0;
    for (var v4 = 0; v4 < 20; ++v4) {
        var v5 = v4 & 1 ? v1 : v0;
        var v6 = v4 & 1 ? v2 : 'hello';
        v3 += typeof v5 == 'object';
        v3 += (typeof v6 == 'object') << 1;
    }
    if (v3 != 1000000)
        throw 'Error: bad result: ' + v3;
}());