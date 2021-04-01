function f0(x) {
    WScript.Echo(x);
}
function f1(n, str) {
    try {
        if (n == 0)
            throw str;
        else
            f1(n - 1, str);
    } finally {
        f0('f(' + n + '): ' + str);
    }
}
try {
    f1(10, 'test 1');
} catch (v1) {
    f0(v1);
}
try {
    with (v1) {
        return v1 > 'abc' && this === f1;
    }
} catch (z) {
}
var v0 = {
    toISOString: 1,
    toJSON: Date.prototype.toJSON
};
try {
    v0.toJSON();
} catch (e) {
    with ({}) {
        f0(e);
    }
}
var v1 = 'global';
try {
    throw 'abc';
} catch (e) {
    eval('var a = \'catch-local\';');
}
f0(v1);