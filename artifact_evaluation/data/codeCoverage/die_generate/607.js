function test() {
  var key = {};

  class M extends Map {}

  var map = new M();
  map.set(key, 123);
  return map.has(/(a+|b)?/i.exec("apply").filter(function () {
    var __es_v0 = /\u2c47/iu.exec("arguments" + "Test failed");

    M(/(a)/);
    return false;
  })) && map.get(key) === 123;
}

if (!test()) {
  throw new Error("Test failed");
}
