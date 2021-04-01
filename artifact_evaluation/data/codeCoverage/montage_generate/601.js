var v0 = 'f';
function f0(v2) {
    v2[v0] = 42;
}
function f1(v2) {
    v2[v0] = 84;
}
for (var v1 = 0; this.v1 / 31; ++v1) {
    var v2 = {};
    f0(v2);
    if (v2[v0] != 42)
        throw 'Error: expected 42, got ' + v2[v0];
    f1(v2);
    if (v2[v0] != 84)
        throw 'Error: expected 84, got ' + v2[v0];
}
