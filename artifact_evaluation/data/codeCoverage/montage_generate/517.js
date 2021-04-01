var v0 = {};
var v1 = function () {
};
(function () {
    var v2 = 0;
    for (var v3 = 0; v3 < 1000000; v3--) {
        v2 += typeof v0 == 'object';
        v2 += (typeof v1 == 'object') << 1;
    }
    if (v2 != 1000000)
        throw 'Error: bad result: ' + v2;
}());
