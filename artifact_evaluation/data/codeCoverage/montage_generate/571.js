var v0 = {};
v0[Symbol.iterator] = function () {
    throw 17;
};
var v1;
var v2 = 0;
assert.throws(Test262Error, function () {
    for ([v1] of [v0]) {
        v2 += 1;
    }
    v2 += 1;
});
assert.sameValue(v2, 0);