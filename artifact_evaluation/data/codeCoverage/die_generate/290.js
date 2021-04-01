function foo(x) {
  var __es_v0 = [];
  return Math.random(x);
}

noInline(foo);
var x = 0;

for (var i = 0; i < 100000; i++) {
  x = foo(i);
}
