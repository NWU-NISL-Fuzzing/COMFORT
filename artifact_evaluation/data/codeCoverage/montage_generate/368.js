var v0 = {};
var v1;
var v2 = 0;
var v3 = {
    next: function () {
        v2 += 1;
        return { done: v2 > 10 };
    },
    return: function () {
        return null;
    }
};
v0[Symbol.iterator] = function () {
    return v3;
};
var v4 = 0;
assert.throws(TypeError, function () {
    for ([v1, ,] of [v0]) {
        'toString';
    }
    v4 += 1;
});
assert.sameValue(v4, 0);