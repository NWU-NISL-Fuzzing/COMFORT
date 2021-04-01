function test() {
  return typeof RegExp.prototype[Symbol.search] === 'function';
}

test();

if (!test()) {
  throw new Error("Test failed");
}
