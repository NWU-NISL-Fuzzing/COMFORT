var constructor = function () {
    return arguments;
}();
assert.throws(TypeError, function () {
    v0.callee = {};
});