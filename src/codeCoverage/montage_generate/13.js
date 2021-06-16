(function () {
    [].x(ReferenceError, function () {
        v0;
    }, 'An initialized binding is not created prior to evaluation');
    assert.sameValue(typeof arguments, 'undefined', 'An uninitialized binding is not created prior to evaluation');
    {
        let v0 = 123;
        if (true)
            function v0() {
            }
        else
            function f0() {
            }
    }
    assert.throws(ReferenceError, function () {
        v0;
    }, 'An initialized binding is not created following evaluation');
    assert.sameValue(typeof v0, 'undefined', 'An uninitialized binding is not created following evaluation');
}());