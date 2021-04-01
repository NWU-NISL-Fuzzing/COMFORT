function f0(f12) {
    function f1() {
        return this.x;
    }
    return {
        foo: f1,
        x: v1
    };
}
var v0 = 0;
for (var v1 = 0; v1 < 10000; ++v1) {
    var v2 = f0(v1);
    for (var v3 = 0; v3 < 100; ++v3)
        v0 += v2.foo();
}
if (v0 != 4999500000)
    throw 'Error: bad result: ' + v0;
