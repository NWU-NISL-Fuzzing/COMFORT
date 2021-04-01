function f8() {
    var v0 = [];
    var v1 = [];
    var v2 = [];
    for (var v3 = 0; v3 < 1000; ++v3) {
        v0.push(v3 + 0.5);
        v1.push(v3 - 0.5);
        v2.push(v3 % 2 ? 0.5 : -0.25);
    }
    for (var v3 = 0; v3 < 1000; ++v3) {
        for (var v4 = 0; v4 < v0.length; ++v4)
            v0[v4] += v1[v4] * v2[v4];
    }
    var v5 = 0;
    for (var v3 = 0; v3 < v0.length; ++v3)
        v5 += v0[v3];
    return v5;
}
var v5 = f8();
if (v5 != 63062500)
    throw 'Bad result: ' + v5;
