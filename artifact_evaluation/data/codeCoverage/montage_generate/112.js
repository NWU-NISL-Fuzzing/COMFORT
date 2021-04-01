var v27 = {};
v1[Symbol.iterator] = function () {
    return {
        next: function () {
            throw new Test262Error();
        }
    };
};
class C {
    method([x]) {
    }
}
;
var v1 = new C();
assert.throws(Test262Error, function () {
    v1.method(v0);
});