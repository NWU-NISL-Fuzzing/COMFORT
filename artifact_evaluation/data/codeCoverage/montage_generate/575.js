function f0() {
    new Promise(function () {
    });
    try {
        Promise(function () {
        });
        return false;
    } catch (e) {
        return true;
    }
}
if (!f0())
    throw new f0('Test failed');
