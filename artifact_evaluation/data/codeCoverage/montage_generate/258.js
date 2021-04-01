for (var v0 = 0; v0 < 100; ++v0) {
    var b = RegExp, eval = v0;
    v3.__defineGetter__('f', function () {
        return v1.f;
    });
    var v2;
    var v3;
    v3 = 'not set';
    try {
        v3 = v2.f;
    } catch (e) {
        v2 = e;
    }
    if (v3 != 'not set')
        throw 'Did set result: ' + v3;
    if (!v2 || v2.toString().indexOf('RangeError') != 0)
        throw 'Bad exception: ' + v2;
}
