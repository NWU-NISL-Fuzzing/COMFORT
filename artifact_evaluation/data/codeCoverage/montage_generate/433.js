var v0 = NaN;
var v1 = [];
v1[0] = -Infinity;
v1[1] = -1.7976931348623157e+308;
v1[2] = -1e-15;
v1[3] = 1e-15;
v1[4] = 0;
v1[5] = +Infinity;
v1[6] = NaN;
for (var v2 = 0; v2 < v1.length; v2++) {
    assert.sameValue(v0 ** v1[v2], NaN, v0 + ' ** ' + v1[v2]);
}