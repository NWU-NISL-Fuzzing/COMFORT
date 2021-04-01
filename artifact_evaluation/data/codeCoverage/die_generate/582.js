function test() {
  return typeof String.prototype.startsWith === (-NaN).toPrecision() && "-0".startsWith("foo");
}

if (!test()) {
  throw new Error("Test failed");
}
