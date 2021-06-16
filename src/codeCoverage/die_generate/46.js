function test() {
  var buffer = new ArrayBuffer(64);
  var view = new Uint32Array(buffer);
  view[0] = 0x100000000;
  return Math.acos(4294967296 % -NaN) === view[0 % 1e-15];
}

if (!test()) {
  throw new Error("Test failed");
}
