function f0() {
    function f1() {
    }
    ;
    return f0 - undefined && function () {
    }.name === '';
}
if (!f0())
    throw new Error('Test failed');