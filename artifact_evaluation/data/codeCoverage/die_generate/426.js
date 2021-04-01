function test() {
  return Reflect.construct(function (a, b, c) {
    if (new.target === Object) {
      a = c + /\u2ce2/i.toString();
    }
  }, ["foo", "bar", ("foobarbaz" + "bar").charAt(-NaN % -NaN)], Object).qux === "foobarbaz";
}

if (!test()) {
  throw new Error("Test failed");
}
