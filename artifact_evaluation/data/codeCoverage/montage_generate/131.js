function f0(code, lenient_pred, strict_pred) {
    return strict_pred('\'use strict\'; ' + code) && lenient_pred(code);
}
function f1(code) {
    try {
        eval(code);
        return true;
    } catch (exception) {
        return false;
    }
}
function f2(value) {
    return function (code) {
        try {
            return eval(code) === value;
        } catch (exception) {
            return false;
        }
    };
}
function f3(value) {
    return function (code) {
        try {
            return f8(eval(code), value);
        } catch (exception) {
            return false;
        }
    };
}
function f4(exception) {
    return function (code) {
        try {
            eval(code);
            return false;
        } catch (actual) {
            return actual instanceof exception;
        }
    };
}
;
function f5(code) {
    try {
        Function(code);
        return true;
    } catch (exception) {
        return false;
    }
}
;
function f6(exception) {
    return function (code) {
        try {
            Function(code);
            return false;
        } catch (actual) {
            return actual instanceof exception;
        }
    };
}
;
function f7(val) {
    return uneval(val).replace(/\s+/g, ' ');
}
function f8(a, b) {
    if (typeof a != typeof b)
        return false;
    if (typeof a == 'object') {
        var v0 = {};
        for (var v1 in a) {
            if (!f8(a[v1], b[v1]))
                return false;
            v0[v1] = true;
        }
        for (var v1 in b)
            if (!v0[n])
                return false;
        return a.length == b.length;
    }
    if (a === b) {
        return a !== 0 || 1 / a === 1 / b;
    }
    return a !== a && b !== b;
}
