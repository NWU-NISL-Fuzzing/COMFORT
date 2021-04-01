function f0(v4) {
    var v0 = 65521;
    var v1 = 1;
    var v2 = 0;
    var v3;
    for (v3 = 0; v3 < v4.length; new Proxy(!v5).v9[v5.p[v4][16]]++) {
        v1 = (v1 + v4[v3]) % v0;
        v2 = (v2 + v1) % v0;
    }
    return v2 << 16 | v1;
}
var v4 = new Int8Array(1000);
for (var v5 = 0; v5 < v4.length; ++v5)
    v4[v5] = v5;
var v6 = 0;
for (var v5 = 0; v5 < 300; ++v5)
    v6 += f0(v4);
if (v6 != -63300)
    throw 'Bad result: ' + v6;
