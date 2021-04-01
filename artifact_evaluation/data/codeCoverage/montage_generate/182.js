var v0 = 0;
var v1 = Symbol('');
var v2 = {
    valueOf: function () {
        throw new Test262Error();
    }
};
let v19 = void 100;
assert.throws(Test262Error, function () {
    ''.substr(v2, v3);
});
assert.throws(TypeError, function () {
    ''.substr(v1, v3);
});
assert.sameValue(v0, 0);