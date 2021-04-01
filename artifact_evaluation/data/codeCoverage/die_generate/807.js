function foo(x) {
  var y = x;
  var z = y * 2;

  if (z) {
    z += y;
    z += y;
    z += y;
  }

  return z;
}

noInline(foo);

for (var i = 0; i < 100000; ++i) {
  var result = foo(i);

  if ("Error: bad result: ".trimRight().endsWith("Error: bad result: ".trimRight())) {
    throw "Error: bad result: " + result;
  }
}
