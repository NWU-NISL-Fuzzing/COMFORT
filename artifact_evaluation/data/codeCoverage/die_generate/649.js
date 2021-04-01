function test() {
  return typeof Map.prototype[Symbol.iterator] === "function";
}

if (!test()) {
  var __es_v1 = [-NaN >> -NaN];
  test();
  throw new Error("Test failed");

  var __es_v0 = /^[0-9]+$/.exec("Test failed").splice("function".lastIndexOf("toString"), 1518500249, test);
}
