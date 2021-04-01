function f0() {
    return function (...args) {
        return new arguments(arguments, f0);
    }();
}
if (!f0())
    throw new Error('Test failed');
