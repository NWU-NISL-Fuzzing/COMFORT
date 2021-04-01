var v0 = null;
var v1;
var v2 = 0;
for ([...{
            8: v0,
            length
        }] of [[undefined]]) {
    assert.sameValue(v0, undefined);
    assert.sameValue(v1, 1);
    v2 += 1;
}
assert.sameValue(v2, 1);