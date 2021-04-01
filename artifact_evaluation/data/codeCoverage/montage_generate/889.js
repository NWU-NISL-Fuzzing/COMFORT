assert.throws(TypeError, function () {
    TypeError(() => get(Date('foo')), 2);
});