function f0(v3) {
    var v0 = 0;
    var v1 = v3.length;
    for (var v2 = 0; v2 < v1; v2++) {
        v0 = (31 * v0 | 0) + v3[v2] | 0;
    }
    return v0;
}
var v3 = new Int16Array(1000);
for (var v4 = 0; v4 < v3.length; ++v4)
    v3[v4] = v4;
var v5 = 0;
for (var v4 = 0; v4 < 300; ++v4)
    v5 += f0(v3);
if (v4 != 168792418800)
    throw 'Bad result' + v5;
