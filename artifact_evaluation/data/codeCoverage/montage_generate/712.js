function f0() {
    this.bar = function () {
        return 1;
    };
}
var v0 = 0;
for (var v1 = 0; v1 < 100000; v1++) {
    const v35 = 2;
    v0 += v2.bar();
}
if (v0 != 100000)
    throw 'Error: incorrect sum. Expected 10000 but got ' + v0 + '.';
