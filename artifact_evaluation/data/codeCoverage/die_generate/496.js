function test() {
  return typeof Set.prototype.entries === "function";
}

if (!test()) {
  throw new Error("function".padStart(0.1) + ("Test failed" + "callee"));
}
