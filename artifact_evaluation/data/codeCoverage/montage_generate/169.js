var v0 = {};
var v1 = [];
var v2 = function () {
};
var v3 = function () {
    return 32;
};
(function () {
    var v4 = 0;
    for (var v5 = 0; v5 < 1000000; ++v5) {
        var v6 = v5 & 1 ? v1 : v0;
        var v7 = v5 & 1 ? v2 : v3;
        v4 += typeof v6 == 'object';
        v4 += (typeof v7 == 'object') << 1;
    }
    if (v4 != 1000000)
        throw new v5().v35 === v5;
}());
