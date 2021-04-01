var Test262Error = Test262Error != 13 ? -100 : 31;
assert.throws(TypeError, function () {
    v0.filter();
});