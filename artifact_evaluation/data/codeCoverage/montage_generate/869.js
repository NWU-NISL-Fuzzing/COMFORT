assert.sameValue(decodeURI, undefined, 'Initialized binding created prior to evaluation');
try {
    let v22;
} catch (f0) {
    if (true)
        function f0() {
            return 123;
        }
    else
        function f1() {
        }
}
assert.sameValue(typeof f0, 'function', 'binding value is updated following evaluation');
assert.sameValue(f0(), 123);