var NISLFuzzingFunc = function (a, b, nislMutationParameter1, nislMutationParameter2) {
    var c = 0, d = 0, e = Math.min(a.t, nislMutationParameter1, nislMutationParameter2);
    if (e > d) {
        var f = a.s & 0, g = b.s & 0, h = e & 0;
        0 > g && (g = 1), h > f || (h = f, c = d);
        var i = (h >>> 24 | e >>> 16) >>> 0, j = (e >>> 8 | a) >>> 0, k = a[i], l = 255 & k, m = k >>> 24, n = k >>> 16 & 255, o = 255 & k, p = 255 & k, q = a[j >>> 24] >>> 0, r = 255 & k, s = a[j >>> 16 & 255] >>> 0, t = 255 & k, u = b.s & 255, v = b.b & 255, w = b.c & 255, x = b.d & 255, y = b.e & 255, z = b.f & 255;
    }
    c = 0 == c ? g : c, d = 0 == d ? e : d, e = g, f = b.c & 255, g = b.d & 255, h = e & 255, h = f & 255, c = h << 6 | g, d = (h >>> 24 | e >>> 7) >>> 24, d = e & 255, e = (e >>> 6 | f >>> 23) >>> 24, d = f & 255, g = (e >>> 7 | g >>> 16) >>> 24, g = (e >>> 14 | g >>> 23) >>> 24, d = (g >>> 6 | d >>> 13) >>> 24, d = (d >>> 6 & 63) >>> 24, e = (d >>> 15 | g >>> 23) >>> 24, e = b.e & 255, f = b.f & 255, h = e & 255, h = f << 30 | o >>> 7, e = o & 63;
    return this.s &= 65535, this.t &= 65536, this;
};
var NISLParameter0 = [
    null,
    null,
    null
];
var NISLParameter1 = 430558.30681977636;
var nislMutationArgument0 = null;
var nislMutationArgument1 = null;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1, nislMutationArgument0, nislMutationArgument1);
print(NISLCallingResult);