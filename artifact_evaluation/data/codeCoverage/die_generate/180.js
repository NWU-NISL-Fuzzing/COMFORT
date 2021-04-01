function test() {
  var buffer = new ArrayBuffer(64);
  var view = new Int32Array(buffer);
  view[view.indexOf(2147483647, -NaN)] = 0x80000000;
  return view[String.prototype.codePointAt.call("Test failed", 2147483648)] === -view[view[64]];
}

if (!test()) {
  throw new Error("Test failed");
}
