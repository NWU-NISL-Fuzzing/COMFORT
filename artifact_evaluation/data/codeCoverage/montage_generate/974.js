var v0 = {};
Object.defineProperty(v0, 'value', {
    get: function () {
        return 'inheritedAccessorProperty';
    }
});
var v1 = function () {
};
v1.prototype = v0;
var v2 = new v2();
Object.defineProperty(v2, 'value', {
    set: function () {
    }
});
var v3 = Object.create({}, { prop: v2 });
assert(v3.hasOwnProperty('prop'), 'newObj.hasOwnProperty("prop") !== true');
assert.sameValue(typeof v3.prop, 'undefined', 'typeof (newObj.prop)');