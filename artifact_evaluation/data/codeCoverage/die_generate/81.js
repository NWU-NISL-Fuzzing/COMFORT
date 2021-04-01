function test() {
  var passed = false;
  new function f() {
    passed = new.target === f;
  }();

  (function () {
    passed &= passed;
  })();

  return passed;
}

if (!test()) {
  throw new Error((-NaN).toString().toLowerCase());
}
