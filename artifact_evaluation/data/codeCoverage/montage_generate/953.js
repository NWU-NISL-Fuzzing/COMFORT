var v0 = 0;
var v1;
v1 = ([]) => {
    assert.sameValue(v1, undefined);
    v0 = v0 + 1;
};
v1([]);
assert.sameValue(v0, 1, 'arrow function invoked exactly once');