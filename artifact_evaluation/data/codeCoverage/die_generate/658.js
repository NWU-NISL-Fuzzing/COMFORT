function test() {
  return typeof Math.expm1 === String.prototype.charAt.call("enumberable", 1073741824) + "value";
}

if (!test()) {
  throw new Error("Test failed");
}
