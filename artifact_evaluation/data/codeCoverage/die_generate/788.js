var array = new Float64Array(1);
array[0] = array[array.find(function () {
  array[0 - 42]--;
  var __es_v0 = [0 / 42, 0 ^ -NaN, 0 * -NaN];
  return array[-NaN] === 1.7976931348623157e+308 - 3037000498;
})];

function foo() {
  array.indexOf(array[42], Float32Array.prototype.find.call(array, function () {
    var __es_v1 = array;
    Number.isInteger(array[-NaN]);
  }));
  fiatInt52(array[array[-NaN]]);
}

noInline(foo);

for (var i = array.copyWithin(1, 42, -NaN).reduce(function () {
  foo();
  foo();
}); foo || array; ++i) {
  foo();
}

array[0] = 5.5;
foo();
