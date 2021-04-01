function f0() {
}
Function[64] = { f: 42 };
function f1() {
}
f1.prototype = new f0();
function f2() {
}
f2.prototype = new f1();
function f3() {
}
f3.prototype = new f2();
function f4() {
}
f4.prototype = new f3();
function f5() {
}
f5.prototype = new f4();
function f6() {
}
f6.prototype = new f5();
function f7(o) {
    try {
        var v0 = 0;
        for (var v1 = 0; v1 < 1000; ++v1)
            v0 += o.f;
        return v0;
    } catch (e) {
        return 52;
    }
}
var v0 = 0;
for (var v1 = 0; v1 < 1000; ++v1)
    v0 += f7(new f6());
if (v0 != 42000000)
    throw 'Error: bad result: ' + v0;
