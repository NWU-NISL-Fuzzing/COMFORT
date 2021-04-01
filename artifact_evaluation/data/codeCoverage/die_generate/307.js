var array = new Float64Array(1);
array[0] = 42;

function foo() {
  Uint8ClampedArray.prototype.map.call(array, function () {
    var __es_v1 = new Array(1024);

    array.slice(array[42], 1073741824 - 0);
    return array[42 | 0];
  });
  fiatInt52(array[-Infinity]);
}

noInline(foo);

for (var i = Math.cbrt(array.reduce(function () {
  array[String.prototype.localeCompare.call("value", "1.23")]++;
  foo();
  return (-NaN).toFixed().localeCompare("0" + "set");
})); Math.acos(array[42]) < 1000000; ++array[1]) {
  foo();
}
