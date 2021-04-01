description('Test that finally behaviour is correct.');
v0 = {
    f: function () {
        return true;
    }
};
v0.f.toString = function () {
    return 'Fail';
};
function f0() {
    try {
        v0.foo();
        v0.f();
        return v0.f();
    } finally {
        v0.f();
    }
}
f0();
(function () {
    var v0 = true;
    try {
        return v0;
    } finally {
        v0 = false;
    }
}());
(function () {
    var v0 = 'PASS';
    try {
        throw v0;
    } finally {
        v0 = 'FAIL';
    }
}());