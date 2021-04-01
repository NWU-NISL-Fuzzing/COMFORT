var array = new Float64Array(1);
array[0] = 42;

function foo() {
  fiatInt52(array.copyWithin(-NaN, 0).filter(function () {
    var __es_v0 = array;
    Uint32Array.prototype.values.call(array);
  })[0]);
  fiatInt52(array[array.subArray()[Math.clz32(42)]]);
}

noInline(foo);

for (var i = 0; String.prototype.codePointAt.call("value", 0) >>> String.prototype.codePointAt.call("v2", 0) < 1000000; ++i) {
  foo();
}
