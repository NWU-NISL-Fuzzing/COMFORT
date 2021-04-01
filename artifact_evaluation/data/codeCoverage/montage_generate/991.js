function f0() {
    function* f1() {
        yield 5;
        yield 6;
    }
    ;
    var v0 = f1();
    var v13 = '"'.match, v23 = function undefined() {
            !v3[10][9];
            30;
            new undefined(59, 32, 6, 'length', 2100, 4, 2);
        };
    var v2 = v23.value === 5 && v2.done === false;
    v1 = v0.next();
    v2 &= v1.value === 6 && v1.done === false;
    v1 = v0.next();
    v2 &= v1.value === undefined && v1.done === true;
    return v2;
}
if (!f0())
    throw new Error('Test failed');
