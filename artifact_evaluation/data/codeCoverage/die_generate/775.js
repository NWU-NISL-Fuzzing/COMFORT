function test() {
  var O = {};

  O[Symbol.replace] = function () {
    return 42;
  };

  return Math.random().toLocaleString().replace(O) === 42;
}

if (!test()) {
  throw new Error("Test failed");
}
