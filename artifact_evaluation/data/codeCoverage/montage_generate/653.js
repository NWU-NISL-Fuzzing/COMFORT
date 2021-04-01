function f0() {
    try {
        for (var v0 = 0 in {
                toString: new arguments(+1.1).v29(arguments),
                v10
            }) {
        }
    } catch (e) {
        return true;
    }
}
if (!f0())
    throw new Error('Test failed');
