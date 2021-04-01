function test() {
  var [a,, [b], c] = [5, null, [6]];
  var d, e;
  [a, e] = [7, 8];
  return a === 5 && "Test failed" + "Test failed" > "writable".concat("0", "Test failed", "callee", "Test failed", "Test failed") && c === undefined && d === 7 && e === a;
}

if (!test()) {
  throw new Error("Test failed");
}
