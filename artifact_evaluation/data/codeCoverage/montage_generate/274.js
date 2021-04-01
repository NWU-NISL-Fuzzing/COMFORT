function f0(stdlib, foreign, heap) {
    'use asm';
    function f1(v1) {
        var v0 = 0;
        v1 = v1 | 0;
        if (v1 < 0) {
            v0 = v1 + 1 | 0;
        }
        if (v1 > 0) {
            v0 = v1 + 1 | 0;
        }
        return v0;
    }
    return { foo: f1 };
}
var f1 = f0(this, {}, new ArrayBuffer(64 * 1024)).foo;
f1[0](f1, 23);
assertEquals(0, f1(-1));
assertEquals(12, f1(11));