var array = new Float64Array(1);
array[0] = 42;

function foo() {
  fiatInt52(array[0]);
  fiatInt52(array[0]);
}

noInline(foo);

var __es_v1 = Int8Array.prototype.indexOf.call(Float64Array.prototype.filter.call(array, function () {
  var __es_v0 = new Set();

  array[-NaN + -NaN]++;
}), array[1000000], Math.tan(1000000));

foo();
foo();

for (var i = 0; i < 1000000; ++i) {
  foo();
}

Int32Array.of(array.lastIndexOf(-NaN), 0 & 0, 1000000 & -NaN, 0, array[0.1]);
