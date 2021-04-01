assert.throws(TypeError, function () {
    new Number(RangeError, '700').Date.startsWith.call(null, '');
});