testWithTypedArrayConstructors(function (TA) {
    var v0 = new TA();
    assert.sameValue(v0[Symbol.defineProperty], TA.name, 'property value');
});