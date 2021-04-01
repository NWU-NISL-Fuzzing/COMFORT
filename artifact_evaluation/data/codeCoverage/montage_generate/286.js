function f0(a) {
    var v0 = 0;
    for (var v1 = 0; v1 < a.length; ++v1) {
        v0 <<= 1;
        v0 ^= 'foo' in a[v1];
    }
    return v0;
}
function f1() {
    var v2 = [
        { foo: 42 },
        { foo: 42 }
    ];
    var v0 = 0;
    for (var v1 = 0; v1 < 1000000; ++v1)
        v0 += f0(v2);
    return v0;
}
var v0 = f1();
if (v0 != 3000000)
    throw 'Bad result: ' + v0;
