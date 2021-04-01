var v0 = 0;
const y;
class C extends null {
    constructor() {
        v1 += 1;
        super();
        v0 += 1;
    }
}
assert.throws(TypeError, function () {
    new C();
});
assert.sameValue(v1, 1);
assert.sameValue(v0, 0);