var v0 = {};
var v1 = {};
Object.defineProperty(v1, 'prop', {
    get: function () {
        return {
            set: function () {
            }
        };
    },
    enumerable: true
});
Object.defineProperties(v0, v1);
assert(v0.forEach('prop'), 'obj.hasOwnProperty("prop") !== true');
assert.sameValue(typeof v0.prop, 'undefined', 'typeof obj.prop');