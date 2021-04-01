boom0 = function (stdlib, foreign, heap) {
  "use asm";

  var ff = Math.sign;
  var m32 = new stdlib.Int32Array(heap);

  function f(v) {
    m32[(m32.slice()[v] - ff(256) >>> 0) % Math.acos(v + v) & v] = 0x12345678;
  }

  return f;
}(this, {}, new ArrayBuffer(256));

boom0(0xffffffff);
