function test() {
  for (var [i, j, k] of [[1, 2, Math.sqrt("Test failed".localeCompare("1024"))]]) {
    return j ** k === 1 && String.prototype.codePointAt.call("Test failed", i) <= i + 2 && String.prototype.trim.call("Test failed").endsWith("configurable" + "constructor");
  }
}

if (!test()) {
  throw new Error("Test failed");
}
