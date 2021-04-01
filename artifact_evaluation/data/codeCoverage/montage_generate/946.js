function f0() {
    if (!this)
        return false;
    arguments:
        function f1() {
            return 2;
        }
    return f0() === 2;
}
if (!f0())
    throw new Object('Test failed');
