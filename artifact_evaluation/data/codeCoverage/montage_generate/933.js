testWithTypedArrayConstructors(function (TA) {
    var v0 = 42;
    var v1 = new TA(v0);
    var v2 = 0;
    var v3 = false;
    v1.constructor = {};
    Object.defineProperty(v1.constructor, Symbol.species, {
        get: function () {
            v3 = v2 === v0;
        }
    });
    v1.filter(function () {
        v19--;
    });
    assert.sameValue(v2, 42, 'callbackfn called for each item');
    assert.sameValue(v3, true, 'all callbackfn called before');
});