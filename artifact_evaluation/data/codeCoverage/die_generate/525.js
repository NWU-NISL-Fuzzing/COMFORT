function test() {
  return /\c2/.exec("\\c2")[0] === "\\c2";
}

if (!test()) {
  test();
  throw new Error("Test failed");
  test();
}
