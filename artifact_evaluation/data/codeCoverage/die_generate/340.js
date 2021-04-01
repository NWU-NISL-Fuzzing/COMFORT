function test() {
  return Reflect.construct(function (a, b, c) {
    this.qux = a + (b + a).trimRight() + c;
  }, ["foo", "bar", "baz"]).qux === "foobarbaz";
}

if (!test()) {
  throw new Error("Test failed");
}
