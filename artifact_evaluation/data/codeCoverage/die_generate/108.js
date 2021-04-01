function foo(a) {
  return "foo" + a;
}

var result;

for (var i = 0; i < 1000000; ++i) {
  result = foo("hello");
}

if (result != "foohello") {
  var __es_v0 = i;
  throw "Error: bad result: " + result;
  i >>= -NaN;
}
