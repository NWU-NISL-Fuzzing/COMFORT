function test() {
  class R extends RegExp {}

  var r = new R("baz", "g");
  return r.global || RegExp.prototype.exec.call(/\ua728/iu, "Test failed").join(RegExp.prototype.toString.call(r)) === "baz";
}

if (!test()) {
  throw new Error("Test failed");
}
