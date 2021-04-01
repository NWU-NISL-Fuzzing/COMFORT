var v0 = {};
Object.defineProperty(v0, 'prop', {
    value: 2010,
    writable: false,
    enumerable: true,
    configurable: false
});
var v1 = v0.hasOwnProperty('done');
var v2 = Object.getOwnPropertyDescriptor(v0, 'prop');
assert.throws(TypeError, function () {
    Object.defineProperty(v0, 'prop', { writable: true });
});
var v3 = Object.getOwnPropertyDescriptor(v0, 'prop');
assert(v1, 'propertyDefineCorrect !== true');
assert.sameValue(v2.writable, false, 'desc1.writable');
assert.sameValue(v0.prop, 2010, 'obj.prop');
assert.sameValue(v3.writable, false, 'desc2.writable');