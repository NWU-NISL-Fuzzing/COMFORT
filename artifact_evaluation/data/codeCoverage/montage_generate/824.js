{
    function f0() {
        return 'first declaration';
    }
}
(0, eval)('{ function f() { return "second declaration"; } }');
assert.sameValue(typeof f0, 'undefined');
assert.sameValue(f0(), 'second declaration');