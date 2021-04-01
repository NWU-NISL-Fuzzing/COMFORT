var v0 = 'f';
function f0() {
}
f0.prototype = { [f]: 42 };
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
        var v1 = 0;
        for (var v2 = 0; v2 < 1000; ++v2)
            v1 += o[v0];
        return v1;
    } catch (e) {
        return 52;
    }
}
var v1 = 0;
for (var v2 = 0; v2 < 1000; ++v2)
    v1 += f7(new f6());
if (v1 != 42000000)
    throw 'Error: bad result: ' + v1;
