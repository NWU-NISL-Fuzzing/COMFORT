var v0 = [
    'agdsagdwd',
    'bgbgbgbga',
    'cb3w53bq4',
    'dwerweeww'
];
function f0(v0, s) {
    for (var v1 = 0; v1 < v0.length; ++v1) {
        if (v0[v1] == s)
            return v1;
    }
    return false;
}
var v2 = 0;
for (var v1 = 0; v1 < 1000000; ++v1)
    v2 += f0(v0, 'cb3w53bq4');
if (v2 != 1000000)
    throw 'Bad result: ' + v2;
