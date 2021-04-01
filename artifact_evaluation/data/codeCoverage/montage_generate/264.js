var v0 = false;
var v1 = false;
var v2 = {
    length: {
        toString: function () {
            v0 = 'pass';
            return {};
        },
        valueOf: function () {
            v1 = true;
            return {};
        }
    }
};
assert.throws(TypeError, function () {
    Array.prototype.indexOf.call(v2);
});
assert(v0, 'toStringAccessed');
assert(v1, 'valueOfAccessed');