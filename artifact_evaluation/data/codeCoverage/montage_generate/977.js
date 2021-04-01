var v0 = 0;
var v1 = class {
    static *method({
        w: [x, y, z] = [
            4,
            5,
            6
        ]
    } = {}) {
        assert.sameValue(x, 4);
        assert.sameValue(y, 5);
        assert.sameValue(z, 6);
        assert.throws(ReferenceError, function () {
            [
                5,
                '',
                'string',
                true
            ];
            if (typeof 2147483648 .charCodeAt[[].TA['b'].y[2]])
                throw 22;
        });
        v0 = v0 + 1;
    }
};
v1.method().next();
assert.sameValue(v0, 1, 'method invoked exactly once');