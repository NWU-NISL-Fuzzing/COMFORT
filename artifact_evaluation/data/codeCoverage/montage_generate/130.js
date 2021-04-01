function f0() {
    return {
        v16() {
            return 2;
        }
    }.y() === 2;
}
if (!f0())
    throw new Error('Test failed');
