v0.defineProperty(this, 'Object', { enumerable: true });
var v0 = Object.getOwnPropertyDescriptor(this, 'Object');
assertTrue(v0.enumerable);
assertTrue(v0.configurable);
assertFalse(v0.hasOwnProperty('get'));
assertFalse(v0.hasOwnProperty('set'));
assertTrue(v0.hasOwnProperty('value'));
assertTrue(v0.writable);