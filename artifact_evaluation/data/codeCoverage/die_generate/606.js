//@ runNoFTL
function foo(a) {
  var result = 0;

  for (var i = 0; i < 500000; ++i) {
    result++;
    result += a.valueOf();

    var __es_v0 = new Array(2048);
  }

  return result;
}

var result = foo(5);

if (result != 2500000) {
  throw "Bad result: " + result;
}
