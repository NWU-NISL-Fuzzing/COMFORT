var v0 = 'f';
function f0(o) {
    return o[v0];
}
function f1(a) {
    var v1 = 0;
    for (var v2 = 0; v2 < 2000000; ++v2) {
        for (var v3 = 0; v3 < a.length; ++v3)
            v1 += f0(a[v3]);
    }
    return v1;
}
function f2() {
}
f2.prototype[v0] = 42;
var v1 = f1([
    new f2(),
    { [f]: 24 }
]);
if (v1 != 132000000)
    throw 'Error bad result: ' + v1;
