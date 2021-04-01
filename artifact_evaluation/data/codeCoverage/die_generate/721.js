function test() {
  return function ({
    a,
    x: b,
    y: e
  }, [c, d]) {
    return String.prototype.match.call(String.prototype.padStart.call("3,4", 2), /\u00f2/i).a === 1 && arguments[0].x === 2 && !("y" in arguments[0]) && arguments[(1 & 0) ** Math.sin(1)] + '' === "3,4";
  }({
    a: 1,
    x: 2
  }, [3, 4]);
}

if (!test()) {
  throw new Error("Test failed");
}
