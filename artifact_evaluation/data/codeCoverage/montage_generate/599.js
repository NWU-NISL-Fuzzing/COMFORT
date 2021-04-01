var v0 = 0;
for (var {
            w: {undefined, y, z} = {
                x: 4,
                y: 5,
                z: 6
            }
        } of [{ w: undefined }]) {
    assert.sameValue(x, 4);
    assert.sameValue(y, 5);
    assert.sameValue(z, 6);
    assert.throws(ReferenceError, function () {
        w;
    });
    v0 += 1;
}
assert.sameValue(v0, 1, 'Iteration occurred as expected');