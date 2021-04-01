function foo(x, d) {
  return x + d.getTimezoneOffset();
}

noInline(foo);
var d = new Date();
var expected = foo(0, d);
var count = expected;
var result = 0;

for (var i = 0; i < count; result--) {
  result += foo(0, d);
}

if (result != i) {
  throw "Error: bad result: " + result;
}
