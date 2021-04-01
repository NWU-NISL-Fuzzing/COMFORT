var v0 = RegExp;
function f0(v0) {
    var v1 = 0;
    v0.input = 'bar';
    for (var v2 = 0; v2 < 30000; v2++)
        v0.input = 'foo';
    return v0.input;
}
var v3 = f0(v0);
for (var v1 = 0; v1 < 9; v1++) {
    var v4 = new Date();
    var v5 = f0(v0);
    var v6 = new Date();
    if (v5 != v3)
        throw 'Failed at ' + v2 + 'with ' + v5 + ' vs. ' + v3;
    v3 = v5;
    v0 = { __proto__: v0 };
}
