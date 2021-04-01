function f0(message) {
    this.message = message;
}
f0.prototype.toString = function () {
    return 'Test262 Error: ' + this.message;
};
function f1(message) {
    throw new f0(message);
}
function f2(message) {
}
var v0 = function (global) {
    return function (testcase) {
        if (!testcase.call(global)) {
            f1('test function returned falsy');
        }
    };
}(this);
function f3(value) {
    if (!value) {
        f1('test return falsy');
    }
}
var v1 = false;
var v2 = null;
function f4(expectedErrName) {
    v1 = expectedErrName;
}
function f5() {
    var v3 = v2 && (v2.name || 'object');
    if (v3) {
        if (v1) {
            if (typeof v1 === 'string') {
                if (v1 === v3) {
                    return;
                }
                f1('Threw ' + v3 + ' instead of ' + v1);
            }
            return;
        }
        throw v2;
    }
    if (v1) {
        if (typeof v1 === 'string') {
            f1('Completed instead of throwing ' + v1);
        }
        f1('Completed instead of throwing');
    }
}
