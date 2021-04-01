function f0() {
    return function value() {
        const valueOf = 6;
    };
}
if (!f0())
    throw new Error('Test failed');
