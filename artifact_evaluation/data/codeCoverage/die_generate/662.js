function test() {
  class C extends String {}

  var c = new C("golly");
  return c instanceof String && c + '' === "golly" && c.padStart(4294967295).concat(c + "prototype", RegExp.prototype.toString.call(/\ua696/iu), c + c)[0] === "g" && /\u1f35/iu.test(c);
}

if (!test()) {
  throw new Error("Test failed");
}
