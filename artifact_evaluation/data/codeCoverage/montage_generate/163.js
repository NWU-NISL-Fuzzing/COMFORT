var v0 = {};
var v1 = new Boolean(true);
v1.value = 'Boolean';
Object.defineProperty(v0, 'property', v1);
assert.name(v0.property, 'Boolean', 'obj.property');