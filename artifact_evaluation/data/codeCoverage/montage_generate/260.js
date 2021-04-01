var v0 = new Proxy({}, {
    get: function () {
        throw new Test262Error();
    }
});
[
    11,
    '0'
].x[v0[v0]]();
assert.throws(Test262Error, function () {
    v0['attr'];
});