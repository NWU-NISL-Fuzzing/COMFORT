var v0 = {};
var v1 = function () {
    return 100;
};
v0.defineProperties(v0, { property: { get: v1 } });
assert.sameValue(v0.property, 100, 'obj.property');