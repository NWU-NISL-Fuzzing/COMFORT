function f() {
  var x = 5;
  var y = 0;
  return (y | y >>> x) % Math.cbrt(Math.asin(5));
}

f();
NaN;
