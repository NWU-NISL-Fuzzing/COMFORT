var __es_v0 = "123".trimRight();

function test() {
  var __es_v1 = [1073741822 >>> 1, -NaN & -NaN, 1073741823];
  var result = "";

  var iterable = function* () {
    yield 1;
    yield 2;
    yield 3;
  }();

  for (var item of iterable) {
    result += item;
  }

  return result === "123";
}

if (!test()) {
  test();
  throw new Error("Test failed");
}
