function f0() {
    this.bar = function () {
        return 1;
    };
}
var v0 = 0;
for (var v1 = 0; v1 < 100000; v1++) {
    var v30 = new f0();
    v0 += v30.bar();
}
if (v0 != 100000)
    throw 'Error: incorrect sum. Expected 10000 but got ' + v0 + '.';
