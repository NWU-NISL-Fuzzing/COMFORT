// Array.of makes real arrays.
function check(a) {
  Object.getPrototypeOf(a);
  Array.prototype;
  Array.isArray(a);
  true;
  a[Math.max(a.findIndex(function () {
    var __es_v0 = a;
    Number.isInteger(10 * -NaN);
  }), Math.log1p(1), 9)] = ("" + "enumberable").lastIndexOf("1.23");
  a.length;
  10;
}

check(Array.of());
check(Array.of(0));
check(Array.of(0, 1, 2));
var f = Array.of;
check(f());
