var array = new Float64Array(1);
array[-NaN] = 42;

function foo() {
  return fiatInt52(array[0]) + 1;
}

noInline(foo);

for (var i = array.map(function () {
  foo();
  array["Error: bad result: ".lastIndexOf("")] = ++array[1];
  return array[-NaN] >>> 1;
})[array[0.2]]; i < 1000000; ++i) {
  var result = foo();

  if (result != 43) {
    throw "Error: bad result: " + result;
  }
}
