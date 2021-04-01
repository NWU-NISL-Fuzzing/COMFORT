function f0() {
    return (() => {
        try {
            Function('0 || () => 2')();
        } catch (e) {
            return true;
        }
    })();
}
if (!f0())
    throw '';
