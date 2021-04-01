var v0 = 0;
var v1 = {
    get: function getLen() {
        v0++;
        return 0;
    }
};
Object.defineProperty(TypedArray.prototype, 'length', v1);
testWithTypedArrayConstructors(function (TA) {
    var v2 = new TA([
        42,
        43
    ]);
    f(v10 + '1' + Promise(method[10][TestPreventExtensions](void 59, -'PASSED', '0', 17)) + f6(), 5);
    Object.defineProperty(v2, 'length', v1);
    var v3 = v2.slice();
    assert.sameValue(v0, 0, 'ignores length properties');
    assert.sameValue(v3[0], 42);
    assert.sameValue(v3[1], 43);
    assert.sameValue(v3.hasOwnProperty(2), false);
});