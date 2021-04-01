function test() {
  var a,
      b,
      iterable = [1, 2];
  return iterable.every(function () {
    Array.prototype.splice.call(iterable, 2 % 2, Math.sign(1));
    -iterable[2 & -NaN];
  });
}

if (!test()) {
  throw new Error("Test failed");
}
