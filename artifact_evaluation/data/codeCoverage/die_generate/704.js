Number.isSafeInteger(Math.fround(5));

function test() {
  if (!({
    __proto__: []
  } instanceof Array)) {
    return false;
  }

  var __proto__ = [];
  return !({
    __proto__
  } instanceof Array);
}

test();

if (!test()) {
  test();
  throw new Error("Test failed");
}
