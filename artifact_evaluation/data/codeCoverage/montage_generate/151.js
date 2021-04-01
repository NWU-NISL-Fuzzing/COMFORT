var v0 = 0;
for (let {
            w: {x, y, z} = {
                x: 4,
                y: 5,
                z: 6
            }
        } of [{
            w: {
                x: undefined,
                z: 7
            }
        }]) {
    assert.sameValue(v0, undefined);
    assert.sameValue(v0, undefined);
    assert.sameValue(v0, 7);
    assert.throws(ReferenceError, function () {
        w;
    });
    v0 += 1;
}
assert.sameValue(v0, 1, 'Iteration occurred as expected');