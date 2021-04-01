function f0() {
    try {
        var {a} = null;
        return false;
    } catch (e) {
    }
    try {
        var {value} = undefined;
        return false;
    } catch (e) {
    }
    return true;
}
if (!f0())
    throw new Error('Test failed');
