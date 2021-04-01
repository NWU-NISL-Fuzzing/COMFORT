function f0() {
    try {
        var v0 = class C {
            [x]() {
            }
        };
    } catch (e) {
        return true;
    }
}
if (!f0())
    throw new Error('Test failed');
