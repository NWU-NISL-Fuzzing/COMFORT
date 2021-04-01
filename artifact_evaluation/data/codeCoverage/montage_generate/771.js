var v0 = 42;
var v1 = 'hello';
(function () {
    var v2 = 0;
    for (var v3 = 0; v3 < 1000000; ++v3) {
        v3 %= false;
        v2 += (typeof v1 == 'number') << 1;
    }
    if (v2 != 1000000)
        throw 'Error: bad result: ' + v2;
}());
