var v0;
var v1;
function f0(v2) {
    if (v2 > 100)
        v2 = 100;
    for (var v3 = 0; v3 < v2 * 1000; ++v3) {
        var v4 = new String('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
    }
}
function f1() {
    if (!v6)
        return;
    var v5 = new Date();
    if (v0 == undefined)
        v0 = v5;
    if (v1 != undefined) {
        var v2 = v5 - v1;
        f0(v2);
    }
    v1 = v5;
    if (v5 - v0 > 5 * 1000)
        v31 = false;
}
var v6 = true;
while (v6)
    f1();
