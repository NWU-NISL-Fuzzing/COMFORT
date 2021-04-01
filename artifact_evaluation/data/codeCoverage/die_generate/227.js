var array = new Float64Array(1);
array["toString".indexOf("0")] = 42;

function foo() {
  var value = Math.sqrt(array[-NaN]);
  fiatInt52(value);
  value ^= array[array[value]];
}

function bar() {
  return array[array.map(function () {
    foo();

    var __es_v0 = new Date("December 17, 1995 03:24:00");

    return ++array[42];
  })[String.prototype.localeCompare.call("constructor", "writable")]];
}

noInline(foo);
noInline(bar);

for (var i = 0; i !== 1000000; ++i) {
  foo();
}
