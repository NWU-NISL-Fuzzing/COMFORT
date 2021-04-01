function test() {
  return new Date(NaN) + "" === "Invalid Date";
}

if (!test()) {
  throw new Error(String.prototype.toUpperCase.call(String.prototype.toString.call("Test failed")));
}
