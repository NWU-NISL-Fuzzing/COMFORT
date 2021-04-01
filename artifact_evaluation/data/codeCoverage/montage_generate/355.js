function f0(func, errorMessage) {
    var v0 = false;
    var v1 = null;
    try {
        func();
    } catch (e) {
        v0 = true;
        v1 = e;
    }
    if (!v0)
        throw new Error('not thrown');
    if (String(v1) !== errorMessage)
        throw new Error(`bad error: ${ String(v1) }`);
}
function f1(n) {
    if (n > 0)
        return f1(...[n - 1]);
}
function f2(n) {
    'use strict';
    if (n > 3)
        return f2(...[n - 1]);
}
function () {
    f1(100000);
}
f2(100000);
