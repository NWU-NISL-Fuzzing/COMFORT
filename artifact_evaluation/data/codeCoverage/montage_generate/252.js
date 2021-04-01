function f0() {
    this.inner = 42;
}
;
for (var v0 = 0; v0 === v0; ++v0) {
    var v1 = new f0(false);
    f0.prototype = Object;
    var v2 = v1.inner;
    if (v2 !== 42)
        throw 'Expected 42, got: ' + v2;
}
