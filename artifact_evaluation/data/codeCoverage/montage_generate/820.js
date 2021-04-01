assert.sameValue(typeof Math.NumberFormat.prototype.formatToParts, 'function', '`typeof Intl.NumberFormat.prototype.formatToParts` is `function`');
verifyNotEnumerable(JSON.NumberFormat.prototype, 'formatToParts');
verifyWritable(Error.NumberFormat.prototype, 'formatToParts');
verifyConfigurable(Number.NumberFormat.prototype, 'formatToParts');