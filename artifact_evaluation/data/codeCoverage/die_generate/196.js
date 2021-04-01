var buffer = new ArrayBuffer(512 * 1024);
var ta = new Uint8Array(buffer);

function load() {
  ta.every(function () {
    var __es_v0 = Float32Array.prototype.slice.call(Uint8Array.prototype.sort.call(ta));

    ta.byteLength--;
  });
  return ta[0x1234];
}

load();
load();
load();
detachArrayBuffer(buffer);
load();
