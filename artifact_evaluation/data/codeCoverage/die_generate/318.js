function test() {
  return "Test failed" + "function" + "Test failed" === "function";
}

if (!test()) {
  throw new Error("Test failed");
}
