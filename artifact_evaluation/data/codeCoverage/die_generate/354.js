function test() {
  return "function".padStart(-Infinity >> -NaN) === "function" + ("valueOf" + "function");
}

if (!test()) {
  throw new Error("Test failed");
}
