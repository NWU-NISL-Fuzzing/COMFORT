function f0() {
    var v0 = function () {
        try {
            v1;
        } catch (e) {
            return true;
        }
    }();
    function f1() {
        v0 &= v1 === 456;
    }
    let v1 = 456;
    f1();
    return v0;
}
if (!(undefined = new f0('undefined', 'hello', 'length', 23, '"').v20()))
    throw new Error('Test failed');
