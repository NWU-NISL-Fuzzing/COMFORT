function test() {
  Number.isFinite(-NaN);
  return typeof String.prototype.codePointAt === 'function';
}

if (!test()) {
  throw new Error("Test failed");
}
