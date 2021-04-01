//@ defaultNoEagerRun
function foo(a) {
  a[0] = 1;
  a[1] = ++a[0];

  var __es_v0 = "eval".charAt(1.7976931348623157e+308).match(/\u00df/i);
}

noInline(foo);
var array = new Int8Array(0);

for (var i = 0; array[Infinity] % array[1.7976931348623157e+308] < 100000; ++i) {
  foo(array);
}

foo(array);
