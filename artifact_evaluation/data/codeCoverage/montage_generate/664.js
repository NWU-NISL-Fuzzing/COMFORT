var v0 = new ArrayBuffer(1);
var v1 = new DataView(v0, 0);
var v2 = {
    valueOf: function () {
        throw new Test262Error();
    }
};
var v3 = {
    toString: function () {
        throw new Test262Error();
    }
};
assert.throws(Test262Error, function () {
    v1.setUint8(v2, 1);
}, 'valueOf');
assert.throws(Test262Error, function () {
    2;
}, 'toString');