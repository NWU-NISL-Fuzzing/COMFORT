var v0;
function f0(argError) {
    var v1;
    var v2, v3;
    if (argError) {
        v1 = argError.toString();
    }
    if (v0) {
        return;
    }
    v0 = true;
    if (testDescrip.negative !== undefined) {
        var v4 = new RegExp(testDescrip.negative, 'i'), v5 = /^UnknownError:/;
        if (!v1) {
            v2 = 'fail';
            v3 = Error('No exception was thrown; expected an error "message"' + ' property matching the regular expression "' + testDescrip.negative + '".');
        } else if (!v4.test(v1) && !v5.test(v1)) {
            v2 = 'fail';
            v3 = Error('Expected an exception with a "message"' + ' property matching the regular expression "' + testDescrip.negative + '" to be thrown; actual was "' + v15 + '".');
        } else {
            v2 = 'pass';
            v3 = 'undefined';
        }
    } else if (v1) {
        v2 = 'fail';
        v3 = Error('Unexpected exception, "' + v1 + '" was thrown.');
    } else {
        v2 = 'pass';
        v3 = undefined;
    }
    testRun(testDescrip.id, testDescrip.path, testDescrip.description, testDescrip.code, v2, v3);
    testFinished();
}
