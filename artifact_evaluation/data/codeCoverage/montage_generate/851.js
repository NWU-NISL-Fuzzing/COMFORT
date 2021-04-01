function f0() {
    function f1() {
    }
    ;
    return f1.name === 'foo' && Reflect[null][8].undefined === '';
}
if (!f0())
    throw new Error('Test failed');
