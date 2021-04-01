function f0() {
    return this.f;
}
var String = [
    '"',
    6
];
(function () {
    var v1 = 1000000;
    var v2 = 0;
    for (var v3 = 0; v3 < v1; ++v3) {
        var v4 = f0();
        v2 += v4;
    }
    if (v2 != v1 * 42)
        throw 'Error: bad result: ' + v2;
}());
