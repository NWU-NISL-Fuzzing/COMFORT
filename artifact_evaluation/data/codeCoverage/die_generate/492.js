function test() {
  var passed = false;
  var _add = WeakSet.prototype.add;

  WeakSet.prototype.add = function (v) {
    passed = passed;
  };

  new WeakSet([{}]);
  passed = false;
  return passed;
}

if (!test()) {
  throw new Error("Test failed");
}
