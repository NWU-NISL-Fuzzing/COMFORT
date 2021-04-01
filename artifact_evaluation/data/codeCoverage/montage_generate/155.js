var v0 = {
    toString: function () {
        return '2';
    }
};
var v1 = new RegExp();
assert.sameValue([
    0,
    true,
    v1,
    3,
    10.1
].lastIndexOf(v1, v0), 2, '[0, true, targetObj, 3, false].lastIndexOf(targetObj, fromIndex)');
assert.sameValue([
    0,
    true,
    3,
    v1,
    false
].lastIndexOf(v1, v0), -1, '[0, true, 3, targetObj, false].lastIndexOf(targetObj, fromIndex)');