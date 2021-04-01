var v0 = {
    3: true,
    4: false,
    length: 4
};
assert.sameValue(Array.prototype.indexOf.call(v0, true), 3, 'Array.prototype.indexOf.call(obj, true)');
assert.sameValue(Array.prototype.indexOf.call(v0, false), -1, 8);