var v0 = this;
var v1 = new ArrayBuffer(64 * 1024);
var v2 = {};
var v3 = function Module(v0, v2, heap) {
    'use asm';
    function v3(i) {
        var v4 = i ? i & 1 : true;
        if (v4)
            return v4;
        return false;
    }
    return { foo: v3 };
}(v0, v2, v1).foo;
$ERROR(1, v3(1));