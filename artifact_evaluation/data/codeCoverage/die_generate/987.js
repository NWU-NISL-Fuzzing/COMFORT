function test() {
  return /\u0453/iu.exec("-")[0] === "-";
}

if (!test()) {
  throw new Error("Test failed");
}
