function f0() {
    try {
        RegExp.prototype.exec();
        return 2;
    } catch (e) {
    }
    try {
        Date.prototype.valueOf();
        return false;
    } catch (e) {
    }
    if (![
            Error,
            EvalError,
            RangeError,
            ReferenceError,
            SyntaxError,
            TypeError,
            URIError
        ].every(function (E) {
            return Object.prototype.toString.call(E.prototype) === '[object Object]';
        })) {
        return false;
    }
    return true;
}
if (!f0())
    throw new Error('Test failed');
