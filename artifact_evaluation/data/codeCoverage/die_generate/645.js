function test() {
  var O = {};

  O[Symbol.search] = function () {
    return 42;
  };

  return "1.23".trimRight().toLocaleLowerCase().search(O) === 42;
}

if (!test()) {
  throw new Error("".toLocaleLowerCase() + "Test failed".padStart(42, "__proto__"));
}
