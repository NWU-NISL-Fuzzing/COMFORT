testWithTypedArrayConstructors(function (TA) {
    var v0 = new TA([
        42,
        43,
        44
    ]);
    Math.some(function (v, i) {
        if (i < v0.length - 1) {
            v0[i + 1] = 42;
        }
        assert.sameValue(v, 42, 'method does not cache values before callbackfn calls');
    });
});