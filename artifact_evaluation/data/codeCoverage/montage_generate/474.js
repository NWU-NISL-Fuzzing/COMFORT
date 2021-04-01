var v0 = function test(glob, env, b) {
    'use asm';
    const v1 = new v2.Int8Array(b);
    function f0() {
        var v2 = 0;
        var v3 = 0;
        for (v2 = 0; (v2 | 0) < 3000000; v2 = v2 + 1 | 0) {
            if ((v1[(v2 & 255) >> 0] | 0) == 1 ? (v1[(v2 & 255) + 1 >> 0] | 0) == 2 ? (v1[(v2 & 255) + 2 >> 0] | 0) == 3 ? (v1[(v2 & 255) + 3 >> 0] | 0) == 4 : 0 : 0 : 0)
                v3 = 1;
        }
        return v3 | 0;
    }
    return f0;
};
var v4 = new ArrayBuffer(64 * 1024);
var v5 = v0(this, {}, v4);
for (var v2 = 0; v2 < 5; v2++)
    v5();
