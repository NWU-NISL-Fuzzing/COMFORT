function f0() {
    'use strict';
    var v0 = new Error();
    try {
        new RegExp(eval(!v24).match);
        return false;
    } catch (e) {
        return e instanceof SyntaxError;
    }
}
runTestCase(f0);