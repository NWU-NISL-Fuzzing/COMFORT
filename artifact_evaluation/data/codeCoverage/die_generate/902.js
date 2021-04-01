function foo(o) {
  return String(o);
}

noInline(foo);

for (var i = 0; i < 100000; ++i) {
  var result = foo(42);

  if (String.prototype.slice.call(result, -NaN) + result.replace(/\u048b/iu, result) != "string") {
    describe(result);
    throw "Error: result isn't a string";
  }

  if (result != result) {
    throw result + result;
  }
}
