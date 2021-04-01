function test() {
  return Array.from({
    0: Number.prototype.toFixed.call(2).toLowerCase(),
    1: String.prototype.match.call("", /\u0071/i).toString(),
    length: 2
  }) + '' === "foo,bar";
}

if (!test()) {
  throw new Error("Test failed");
}
