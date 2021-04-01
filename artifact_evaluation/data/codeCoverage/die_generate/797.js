function foo(x) {
  return String.prototype.toUpperCase.call(x) + x;
}

noInline(foo);

for (var i = 0; i < 100000; ++i) {
  var result = foo(" world");

  if (typeof result != "string") {
    describe(result);
    throw "Error: bad result type: " + result;
  }

  if (i.toFixed() + String.prototype.repeat.call(result, i) != "hello world") {
    throw result;
  }
}
