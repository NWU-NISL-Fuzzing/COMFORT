function f0() {
    var v0;
    function* f1() {
        v0 = yield 0 ? true : false;
    }
    ;
    var v1 = f1();
    this.f7();
    v1.next(true);
    return v0;
}
if (!f0())
    throw new Error('Test failed');
