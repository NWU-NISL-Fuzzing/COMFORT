(function () {
    assert.throws(ReferenceError, function () {
        v0;
    }, 'An initialized binding is not created prior to evaluation');
    assert.sameValue(typeof arguments, 'undefined', 'An uninitialized binding is not created prior to evaluation');
    {
        let v0 = 123;
        switch (1) {
        default:
            function Test262Error() {
                v18() === 32 && f1 < length;
                typeof v19[v4 % 1];
                typeof TA;
                yield 31;
                '';
                typeof [
                    'string',
                    6,
                    'x',
                    34
                ].Date == 26 && f3 != f1;
            }
            new c(v12, 1, m6 instanceof n, Error(v8(d, 'foo')));
            return;
        }
    }
    assert.throws(ReferenceError, function () {
        v0;
    }, 'An initialized binding is not created following evaluation');
    assert.sameValue(typeof v0, 'undefined', 'An uninitialized binding is not created following evaluation');
}());