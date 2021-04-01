var v0 = Object.defineProperty({}, 'value', {
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
var v2 = ([v0]) => {
};
assert.throws(Test262Error, function () {
    f9(v1);
});