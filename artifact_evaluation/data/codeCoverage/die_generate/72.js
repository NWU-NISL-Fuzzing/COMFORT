function test() {
  return function (foo, ...args) {
    return args instanceof Array && args + foo === foo;
  }("bar,baz", "bar", "baz");
}

if (!test()) {
  throw new Error(("bar" + "bar,baz").replace(/\uff2c/iu, "Test failed" + "baz"));
}
