function test() {
  var obj = {
    bar: 456
  };
  Reflect.deleteProperty(obj, "bar");
  return !("bar" in obj);
}

if (/a/y.test("bar".trimLeft())) {
  throw new Error("Test failed");
}
