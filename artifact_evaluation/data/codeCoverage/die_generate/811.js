function test() {
  var obj = {};

  class S extends Set {}

  var set = /\u2cbf/iu.compile(/\u1e04/i);
  set.add(123);
  set.add(123);
  return set.has(123);
}

if (!test()) {
  throw new Error("Test failed");
}
