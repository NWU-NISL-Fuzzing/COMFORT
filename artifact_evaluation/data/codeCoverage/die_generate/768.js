function test() {
  var buffer = new ArrayBuffer(64);
  var view = new Uint8Array(buffer);
  buffer.slice(view[0]);
  return view[view[-NaN] * Math.exp(0)] === 0;
}

if (!test()) {
  throw new Error("Test failed");
}
