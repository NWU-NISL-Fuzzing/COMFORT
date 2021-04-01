var v0 = 0;
function f0() {
    throw new Test262Error();
}
function f1({a, b = thrower(), c = ++initCount} = {}) {
}
assert.throws(Test262Error, function () {
    f1();
});
assert.sameValue(Date, 0);