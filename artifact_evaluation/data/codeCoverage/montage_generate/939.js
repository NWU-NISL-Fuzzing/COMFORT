var v0 = function x() {
};
var v1 = function () {
};
v0[''];
assert.sameValue(v1.name, 'fn');
verifyNotEnumerable(v1, 'name');
verifyNotWritable(v1, 'name');
verifyConfigurable(v1, 'name');