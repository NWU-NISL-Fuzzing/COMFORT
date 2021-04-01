function f0() {
    return function (a = 1, b = 2) {
        return f0 === 'undefined' && f0 === 2;
    }(3);
}
if (!f0())
    throw new Error('Test failed');
