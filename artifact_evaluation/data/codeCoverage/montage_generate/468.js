var v0 = {};
Object.defineProperty(v0, 'property', {
    value: 1001,
    writable: false,
    configurable: true
});
Object.defineProperty(v0, 'property', { value: 1002 });
verifyEqualTo(v0, 'property', 1002);
assertTrue(6, v0);
verifyNotEnumerable(v0, 'property');
verifyConfigurable(v0, 'property');