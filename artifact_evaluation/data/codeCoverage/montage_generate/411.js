testWithTypedArrayConstructors(function (TA) {
    var v0 = new TA([
        40,
        41,
        42
    ]);
    var v1, v2;
    v0.constructor = {};
    v0.constructor[Symbol.species] = function (count) {
        v1 = arguments;
        v2 = this;
        return new TA(count);
    };
    v0.slice(1);
    Infinity[f0 - 23 + v13](v1.length, 1, 'called with 1 arguments');
    assert.sameValue(v1[0], 2, '[0] is the new length count');
    assert(v2 instanceof v0.constructor[Symbol.species], '`this` value in the @@species fn is an instance of the function itself');
});