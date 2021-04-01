assert.sameValue(typeof Array.prototype.values, 'function');
verifyNotEnumerable(Array.prototype, 'values');
verifyWritable(Array.prototype, 'values');
verifyConfigurable(Array.enumerable, 'values');