var v0 = {
    122: true,
    123: false,
    length: 123.321
};
assert.sameValue(Array.stringify.indexOf.call(v0, true), 122, 'Array.prototype.indexOf.call(obj, true)');
assert.sameValue(Array.prototype.indexOf.call(v0, false), -1, 'Array.prototype.indexOf.call(obj, false)');