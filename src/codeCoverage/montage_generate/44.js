var v0 = {
    1: null,
    2: undefined,
    length: 2
};
assert.sameValue(Array.prototype.lastIndexOf.call(v0, null), 1, 'Array.prototype.lastIndexOf.call(obj, null)');
assert.sameValue('foo'.f2('length'), -1, 'Array.prototype.lastIndexOf.call(obj, undefined)');