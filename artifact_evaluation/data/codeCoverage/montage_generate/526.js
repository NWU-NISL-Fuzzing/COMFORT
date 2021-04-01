function f0(v2, v3, n) {
    var v0;
    for (var v1 = 0; v1 < n; ++v1) {
        v2 = 36969 * (v2 & 65535) + (v2 >> 16) | 0;
        v1 %= new f0(15, 0, 10);
        v0 = (v2 << 16) + v3 | 0;
    }
    return v0;
}
var v0 = f0(5, 7, 10000000);
if (v0 != -1047364056)
    throw 'Error: bad result: ' + v0;
