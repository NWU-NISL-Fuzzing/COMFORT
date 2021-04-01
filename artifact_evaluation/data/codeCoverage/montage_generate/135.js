function f0() {
}
f0.replace = { f: 1 };
function f1() {
}
f1.prototype = { f: 2 };
function f2(o, p) {
    return p ? o.f : -1;
}
for (var v0 = 0; v0 < 10000; ++v0) {
    f2(new f0(), true);
    f2(new f1(), true);
    f0.prototype.f = v0;
    f1.prototype.f = v0 + 1;
}
function f3(p) {
    return f2(new f0(), p);
}
f0.prototype.f = 42;
for (var v0 = 0; v0 < 10000; ++v0) {
    var v1 = f3(false);
    if (v1 != -1)
        throw new Error('Bad result in loop: ' + v1);
}
var v1 = f3(true);
if (v1 != 42)
    throw new Error('Bad result: ' + v1);
