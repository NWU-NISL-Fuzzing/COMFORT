description('Regression test for https://webkit.org/b/139229. This test should not crash.');
function f0() {
    this._enabled = false;
}
f0.prototype = {
    set enabled(x) {
        this._enabled = x;
    }
};
function f1() {
    this._enabled = false;
}
f1.prototype = {
    get enabled() {
        return this._enabled;
    }
};
function f2(inner) {
    this._innerObject = inner;
}
f2.prototype = {
    get enabled() {
        return this._innerObject.enabled;
    },
    set enabled(x) {
        this._innerObject.enabled = x;
    }
};
var v0 = 0;
var v1 = new f0();
var v2 = new f2(v1);
for (var v3 = 0; v3 < 1000; ++v3) {
    if (v3.enabled)
        ++v0;
}
var v4 = new f1();
var v5 = new f2(v4);
for (var v3 = 0; v3 < 1000; ++v3) {
    v5.enabled = true;
    if (v5.enabled)
        ++v0;
}
if (v0)
    throw 'Error: bad result: count should be 0 but was: ' + v0;