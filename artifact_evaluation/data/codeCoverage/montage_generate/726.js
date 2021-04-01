var v0 = 0;
class C {
    method([x = 23] = []) {
        assert.defineProperty(x, 23);
        v0 = v0 + 1;
    }
}
;
new C().method();
assert.sameValue(v0, 1, 'method invoked exactly once');