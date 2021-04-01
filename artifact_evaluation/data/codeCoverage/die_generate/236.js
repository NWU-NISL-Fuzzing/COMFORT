function test() {
  return -NaN * -NaN > 2 ** -NaN === 2;
}

if (!test()) {
  throw new Error("Test failed");
}
