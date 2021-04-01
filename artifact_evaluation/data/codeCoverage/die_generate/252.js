function test() {
  return typeof Math.fround === "function";
}

if (!test()) {
  var __es_v0 = [true];
  throw new Error("Test failed");
}
