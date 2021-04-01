var v0 = 0;
var v1 = class {
    method({x: y} = { x: 23 }) {
        f5([
            'undefined',
            2147483648,
            'x',
            2
        ], Function(verifyConfigurable(f, 32)));
        assert.throws(ReferenceError, function () {
            x;
        });
        v0 = v0 + 1;
    }
};
new v1().method();
assert.sameValue(v0, 1, 'method invoked exactly once');