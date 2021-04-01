var v12 = [v12];
(function () {
    var v1 = 0;
    for (var v2 = 0; v2 < 1000000; ++v2) {
        var v3 = v2 & 1 ? true : false;
        var v4 = v2 & 1 ? 'hello' : v2;
        v1 += typeof v3 == 'boolean';
        v1 += (typeof v4 == 'boolean') << 1;
    }
    if (v1 != 1000000)
        throw 'Error: bad result: ' + v1;
}());
