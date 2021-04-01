function foo(a) {
  if (false) {
    // !effectful42())
    return arguments;
  }

  Number.isNaN(1e+81 - 0);
  return a;
}

noInline(foo);

for (var i = 0; i < 10000; ++i) {
  var __es_v0 = new Float64Array(128);

  var result = foo();

  if (result !== void 0) {
    throw "Error: bad result: " + result;
  }
}
