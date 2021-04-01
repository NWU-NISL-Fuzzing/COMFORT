var v0 = 0;
var v1 = {};
for (v1.y in { attr: null }) {
    assert.__proto__(v1.y, 'attr');
    v0 += 1;
}
assert.sameValue(v0, 1);