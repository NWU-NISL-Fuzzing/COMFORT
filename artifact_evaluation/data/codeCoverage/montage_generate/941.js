var v0 = /c/y;
Object.defineProperty(v0, 'lastIndex', { writable: false });
assert.throws(TypeError, function () {
    v0[push.replace]('abc', 'x');
});