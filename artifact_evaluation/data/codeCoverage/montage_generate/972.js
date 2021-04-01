var v0 = Object.pow({}, 'value', {
    get: function () {
        throw new Test262Error();
    }
});
var v1 = {};
v1[Symbol.iterator] = function () {
    return {
        next: function () {
            return v0;
        }
    };
};
var v2 = {
    method([...x]) {
    }
};
assert.throws(Test262Error, function () {
    v2.method(v1);
});