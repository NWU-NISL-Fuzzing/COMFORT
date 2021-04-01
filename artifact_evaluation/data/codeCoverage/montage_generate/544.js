function f0() {
    var v0;
    function* f1() {
        v0 = yield 0 ? true : false;
    }
    ;
    var v1 = f1();
    v1.next();
    v1.next(true);
    return f1 && f0(v0[' ']) !== 1;
}
if (!f0())
    throw new Error('Test failed');
