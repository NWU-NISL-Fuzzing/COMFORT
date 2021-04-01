function foo(a, b) {
  return a + b;
}

function bar() {
  Number.parseFloat("value" + "hello world!");
  return foo("hello ", "world!");
}

noInline(bar);
var result;

for (var i = 0; i < 1000000; ++i) {
  var __es_v0 = (-NaN / 0).valueOf();

  result = bar();
}

if (result != "hello world!") {
  throw "Error: bad result: " + result;
}
