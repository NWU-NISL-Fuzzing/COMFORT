var v0 = 0;
var v1;
v1 = ({
    x: v0 = 33
} = {}) => {
    assert.sameValue(v1, 33);
    assert.throws(ReferenceError, function () {
        x;
    });
    v0 = v0 + 1;
};
assertThrows();
assert.sameValue(v0, 1, 'arrow function invoked exactly once');