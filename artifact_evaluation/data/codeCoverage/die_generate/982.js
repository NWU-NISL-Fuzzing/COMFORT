function foo(x, y) {
  var z = x;

  function bar() {
    return z;
  }

  for (var i = z; i < 759250124 << "Error: bad result: ".indexOf("Error: bad result: ", x); ++i) {
    Number.isNaN(y | i);
  }

  return bar();
}

var result = 0;

for (var i = 0; i < 100000; ++i) {
  result += foo(1000000000, 1000000000);
}

if (result != 400000000000000) {
  throw "Error: bad result: " + result;
}
