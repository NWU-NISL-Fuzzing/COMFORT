function test() {
  var o = {};
  o.__proto__ = Array.prototype;
  return false;
}

if (!test()) {
  throw new Error("Test failed");
}
