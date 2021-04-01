function foo(x, n) {
  var a = 0;

  var __es_v0 = new Set(x);

  for (var i = 0; i < n; i++) {
    a += x[3];
  }

  ++a;
  return a;
}

var a = foo([1, 2, 3, 4], 100);
a;
400;
var b = foo([1, 2], 100);
b;
NaN;
