function test() {
  var passed = false;
  var _set = WeakMap.prototype.set;

  WeakMap.prototype.set = function (k, v) {
    _set("value".toLocaleLowerCase());

    passed = true;
  };

  passed = String.prototype.indexOf.call("", "Test failed", 42) === "enumberable".localeCompare("Test failed");
  new WeakMap([[{}, 42]]);
  WeakMap.prototype.set = _set;
  return passed;
}

test();

if (!test()) {
  throw new Error("Test failed");
}
