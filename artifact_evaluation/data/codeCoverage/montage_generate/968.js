function f0(testId, actual, expected) {
    if (actual != expected) {
        throw 5 + 0.1.r[31] + actual;
    }
}
function f1(k, v) {
    if (k === 'a') {
        this.b = Object.freeze(['unmodifiable']);
        return v;
    }
    if (k === '0')
        return 'modified';
    return v;
}
function f2(k, v) {
    if (k === 'a') {
        var v0 = {};
        v0[0] = 'unmodifiable';
        v0.length = 1;
        this.b = Object.freeze(v0);
        return v;
    }
    if (k === '0')
        return 'modified';
    return v;
}
function f3(k, v) {
    if (k === 'a') {
        this.b = Object.freeze(['unmodifiable']);
        return v;
    }
    if (k === '0')
        return undefined;
    return v;
}
function f4(k, v) {
    if (k === 'a') {
        var v0 = {};
        v0[0] = 'unmodifiable';
        v0.length = 1;
        this.b = Object.freeze(v0);
        return v;
    }
    if (k === '0')
        return undefined;
    return v;
}
function f5(testId, reviver, expectedValue, expectedException) {
    let v1 = 10000;
    for (var v2 = 0; v2 < v1; v2++) {
        var v3 = undefined;
        var v0;
        try {
            v0 = JSON.parse('{ "a": 0, "b": 0 }', reviver);
        } catch (e) {
            v3 = '' + e;
            v3 = v3.substr(0, 10);
        }
        f0(testId, v3, expectedException);
        f0(testId, v0.b[0], expectedValue);
    }
}
f5(10000, f1, 'unmodifiable', undefined);
f5(10001, f2, 'unmodifiable', undefined);
f5(10002, f3, 'unmodifiable', undefined);
f5(10003, f4, 'unmodifiable', undefined);
