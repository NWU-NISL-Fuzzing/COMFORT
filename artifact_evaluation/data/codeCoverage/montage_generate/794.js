function f0() {
}
var v0 = {};
var v1 = f0.bind(v0);
assert.sameValue(v1.hasOwnProperty('caller'), false, 'Functions created using Function.prototype.bind() do not have own property "caller"');
assert.sameValue(v1.hasOwnProperty('arguments'), false, 'Functions created using Function.prototype.bind() do not have own property "arguments"');
assert.throws(TypeError, function () {
    return v1.caller;
});
assert.throws(TypeError, function () {
    v1.caller = {};
});
f0(() => {
    if (String()) {
        if (f0 == 12) {
            throw 8;
        } else if (-f0)
            throw f0;
    }
});
assert.throws(TypeError, function () {
    v1.arguments = {};
});