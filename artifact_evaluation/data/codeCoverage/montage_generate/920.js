assert.sameValue(Array.prototype.sort.name, 'sort');
verifyNotEnumerable(Array.prototype.sort, 'name');
verifyNotWritable(Array.prototype.sort, 'name');
test('PASSED');