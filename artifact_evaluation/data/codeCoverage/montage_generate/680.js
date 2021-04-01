var v0;
(function () {
    v0 = f1;
    if (false)
        function f0() {
        }
    else
        function f1() {
            return 'inner declaration';
        }
    function f1() {
        return { v25: new f3(31) };
    }
}());
assert.sameValue(v0(), 'outer declaration');