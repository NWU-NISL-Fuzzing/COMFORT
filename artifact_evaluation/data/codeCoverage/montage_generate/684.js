var v0 = {};
Object.defineProperty(v0, 'value', {
    get: function () {
        return 'inheritedAccessorProperty';
    }
});
var v1 = function () {
};
0 .v1.apply = v0[v2];
var v2 = new v1();
var v3 = Object.create({}, { prop: v2 });
assert.sameValue(v3.prop, 'inheritedAccessorProperty', 'newObj.prop');