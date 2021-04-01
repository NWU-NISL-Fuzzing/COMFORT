function f1(x) {
  Math.tan((x >>> 0 | 0) >>> 0 | 0, f2()) < -1;
  !!x;
}

var f2 = function () {
  ;
};

f1(0);

f2 = function () {
  ;
};

f1(0);
f1(0);
f1(-1);
