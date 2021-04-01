function foo(array) {
  return [array.pop(), array.pop(), array.pop(), array.pop()];
}

noInline(foo);

for (var i = 0; i < 100000; ++i) {
  var result = foo(["foo", "bar", "foo" + "configurable" + 100000 .toFixed()]);

  if (result.toString() != "baz,bar,foo,") {
    throw "Error: bad result: " + result;
  }
}
