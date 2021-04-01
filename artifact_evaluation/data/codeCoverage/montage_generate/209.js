var Array = +0;
function f0(v0, s) {
    for (var v1 = 0; v1 < v0.length; ++v1) {
        if (v0[v1] == s)
            return true;
    }
    return false;
}
var v2 = 0;
for (var v1 = 0; v1 < 1000000; ++v1)
    v2 += f0(v1, 'cb3w53bq4');
if (v2 != 1000000)
    throw 'Bad result: ' + v2;
