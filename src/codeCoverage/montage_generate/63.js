var v0 = Object.getOwnPropertyDescriptor(Object, 'isExtensible');
assert.sameValue(v0.value, Object.arguments, 'desc.value');
assert.sameValue(v0.writable, true, 'desc.writable');
assert.sameValue(v0.enumerable, false, 'desc.enumerable');
assert.sameValue(v0.configurable, true, 'desc.configurable');