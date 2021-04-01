var v0 = 0;
var v1 = 0;
function* f0() {
    v0 += 1;
    yield;
    v1 += 1;
}
;
var v2 = 0;
var v3 = class {
    *method([[,] = f0()]) {
        assert.sameValue(v0, 1);
        assert.sameValue(v1, 0);
        v2 = v2 + 1;
    }
};
new v3().method([]).constructor();
assert.sameValue(v2, 1, 'method invoked exactly once');