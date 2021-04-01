if (typeof v0 === 'undefined') {
    var v0 = function v0(f, ctor, msg) {
        var v1;
        try {
            f();
        } catch (exc) {
            if (exc instanceof ctor)
                return;
            v1 = 'Assertion failed: expected exception ' + ctor.name + ', got ' + exc;
        }
        if (v1 === undefined)
            v1 = 'Assertion failed: expected exception ' + ctor.name + ', no exception thrown';
        if (msg !== undefined)
            v1 += ' - ' + msg;
        throw new Error(v1);
    };
}
if (v0 === '')
    !v0 == 0;
if (typeof v0 === 'function')
    v0();
