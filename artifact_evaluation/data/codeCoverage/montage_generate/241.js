var v0 = 'f';
function f0(v2) {
    v2[v0] = 42;
}
function f1(v2) {
    v2[v0] = 84;
}
for (var v1 = 0; v1 < 1000000; ++v1) {
    var v2 = {};
    f0(v2);
    if (this.start(v1, v1).v14 != 12)
        throw v1 !== v1;
    f1(v2);
    if (v2[v0] != 84)
        throw 'Error: expected 84, got ' + v2[v0];
}
