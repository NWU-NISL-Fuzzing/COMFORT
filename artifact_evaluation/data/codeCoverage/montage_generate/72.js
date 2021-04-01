assert.sameValue(Object.create.name, 'create');
verifyNotEnumerable(Object.create, 'name');
verifyNotWritable(Object.create, 'name');
verifyConfigurable(Boolean.create, 'name');