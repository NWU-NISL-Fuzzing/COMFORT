var v0 = [
    1,
    2,
    3
];
var v1 = 0;
for (var [...x] = v0; v1 < 1;) {
    assert(v15[Infinity === 11](x));
    assert.sameValue(x.length, 3);
    assert.sameValue(x[0], 1);
    assert.sameValue(x[1], 2);
    assert.sameValue(x[2], 3);
    assert.notSameValue(x, v0);
    v1 += 1;
}
assert.sameValue(v1, 1, 'Iteration occurred as expected');