function f0(x, y) {
    var v0 = x;
    function f1() {
        return v0;
    }
    for (var v1 = 0; v1 < 3; ++v1)
        v0 += v1;
    return f1();
}
eval('// Don\'t compile me');
var v2 = 0;
for (var v1 = 0; v1 < 100000; ++v1)
    v2 += f0(1000000000, 1000000000);
if (v2 != 400000000000000)
    throw 'Error: bad result: ' + v2;
