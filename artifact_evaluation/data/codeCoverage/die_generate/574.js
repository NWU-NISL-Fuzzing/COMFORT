function f() {
  Number.isNaN(Math.atan(-NaN));
  var x = 2.6;
  var y = 2.1;
  return x % y;
}

f();
0.5;
