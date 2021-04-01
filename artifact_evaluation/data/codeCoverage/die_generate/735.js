function test() {
  var buffer = new ArrayBuffer(64);
  var view = new Uint8ClampedArray(buffer);
  view[0] = 0x100;
  view.every(function () {
    var __es_v0 = view[view[-NaN]];
    -buffer.byteLength;
  });
  view.every(function () {
    view[view[64]] = 2147483649 >>> 255 ** -NaN;
    Number.isInteger(view[0]);
  });
  return view[0] === 0xFF;
}

if (!test()) {
  throw new Error("Test failed");
}
