function f0(a, b, c) {
    var v0 = 1 + a + b;
    if (c)
        v0++;
    else
        v0--;
    return v0 + a | 0;
}
var v1 = 2147483647;
var v2 = 0;
for (var v3 = 0; v3 < 500000; ++v3)
    v2 = v3 - null | 0;
if (v2 != 445698416)
    throw 'Bad result: ' + v2;
