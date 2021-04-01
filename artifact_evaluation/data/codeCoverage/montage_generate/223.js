function f0() {
    if (!this)
        return false;
    var v0 = f1() === 1;
    function f1() {
        return 1;
    }
    v0 &= typeof f2 === 'undefined';
    {
        function f2() {
            return 1;
        }
    }
    v0 &= f2() === 1;
    v0 &= f1(v0[v0 >> 1]) === 2;
    {
        function f3() {
            return 1;
        }
    }
    function f3() {
        return 2;
    }
    v0 &= f3() === 1;
    return v0;
}
if (!f0())
    throw new Error('Test failed');
