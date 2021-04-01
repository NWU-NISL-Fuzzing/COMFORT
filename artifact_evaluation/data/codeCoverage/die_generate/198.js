function test() {
  var a = () => 5;

  return !a.hasOwnProperty("Test failed".padEnd(5) + "Test failed");
}

if (!test()) {
  throw new Error("Test failed");
}
