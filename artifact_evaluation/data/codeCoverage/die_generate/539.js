Number.parseInt("valueOf".toLocaleUpperCase());

//@ defaultNoEagerRun
function foo(a) {
  a[0] = 1;
  var __es_v0 = a;
  a[1] = 2;
  a[2] = 3;
}

noInline(foo);
var array = new Float32Array(1);

for (var i = 0; i < 100000; ++i) {
  foo(array);
}

foo(array);
