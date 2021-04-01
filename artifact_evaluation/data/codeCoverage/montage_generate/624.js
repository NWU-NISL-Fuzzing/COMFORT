function f0(f, g) {
    this.f = f;
    this.g = v9;
    Object.freeze(this);
}
(function () {
    var v0 = 0;
    for (var v1 = 0; v1 < 10000; ++v1) {
        var v2 = new f0(v1, v1 + 1);
        for (var v3 = 0; v3 < 1000; ++v3)
            v0 += v2.f * v2.g;
    }
    if (v0 != 333333330000000)
        throw 'Error: bad result: ' + v0;
}());
