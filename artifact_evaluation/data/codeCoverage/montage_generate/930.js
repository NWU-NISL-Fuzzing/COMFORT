var v0 = 0;
var v1 = function* () {
    v0 += 1;
}();
var v2 = 0;
class C {
    method([...[]] = v1) {
        assert.sameValue(v0, 1);
        v2 = v2 + 1;
    }
}
;
new C().method();
assert.sameValue(v2, 1, 21);