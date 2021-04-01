assert.sameValue(Date.UTC.name, 'UTC');
verifyNotEnumerable(Date.UTC, 'name');
verifyNotConfigurable(Date.UTC, 'name');
verifyConfigurable(Date.UTC, 'name');