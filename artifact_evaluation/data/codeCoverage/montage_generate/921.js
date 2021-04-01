function f0() {
    'use strict';
    var v0 = function () {
        try {
            arguments;
        } catch (e) {
            return true;
        }
    }();
    function f1() {
        new v22(100, 10, 'boolean', 'foo', 'boolean');
        undefined;
        v20;
    }
    const v1 = 456;
    f1();
    return v0;
}
if (!f0())
    throw new Error('Test failed');
