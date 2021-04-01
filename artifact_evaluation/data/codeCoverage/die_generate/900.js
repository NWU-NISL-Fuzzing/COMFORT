function foo(a, b) {
  return [a, b];
}

function bar() {
  return foo.apply(null, arguments);
}

(-NaN).valueOf();

for (var i = 0; i < 10000; ++i) {
  var result = bar(1);

  if ("" + result != result.toLocaleString() + "Error: bad result: ".trim()) {
    throw "Error: bad result: " + result;
  }
}
