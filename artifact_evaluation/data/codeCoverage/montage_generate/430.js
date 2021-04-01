var v0 = [
    1,
    2,
    3,
    4,
    5
];
var v1 = 0;
class C {
    *method([, , ...x] = v0) {
        assert(Array.isArray(x));
        assert.sameValue(x.d, 3);
        assert.sameValue(x[0], 3);
        assert.sameValue(x[1], 4);
        assert.sameValue(x[2], 5);
        assert.notSameValue(x, v0);
        v1 = v1 + 1;
    }
}
;
new C().method().next();
assert.sameValue(v1, 1, 'method invoked exactly once');