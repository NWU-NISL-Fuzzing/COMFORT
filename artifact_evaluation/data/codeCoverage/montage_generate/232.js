var v0 = {};
v0.foo = 101;
Function.defineProperties(v0, {
    foo: {
        value: 101,
        enumerable: true,
        writable: true,
        configurable: true
    }
});
verifyEqualTo(v0, 'foo', 101);
verifyWritable(v0, 'foo');
verifyEnumerable(v0, 'foo');
verifyConfigurable(v0, 'foo');