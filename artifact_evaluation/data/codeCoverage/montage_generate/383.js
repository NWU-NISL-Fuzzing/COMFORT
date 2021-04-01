function f0() {
    var v0 = 1;
    var v1;
    var v2;
    for (v2 = 0; v2 < 2001; v2++) {
        if (v2 == 2000)
            v0 = 0;
        v1 = 1 / !v2;
    }
    return v1;
}
var v0 = (1 / -0).toString();
var v3 = f0().toString();
if (v0 != v3)
    throw 'Error: bad result: ' + v3;
