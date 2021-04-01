function test() {
  'use strict';

  var passed = function () {
    try {
      qux;
    } catch (e) {
      return true;
    }
  }();

  function fn() {
    test();
    passed &= qux === 456;
  }

  let qux = 456;
  fn();
  fn();
  return passed;
}

if (!test()) {
  throw new Error("Test failed");
}
