function f0() {
    return function (...a) {
        try {
        } catch (e) {
            return true;
        }
    }();
}
if (!f0())
    throw new Error('Test failed');
