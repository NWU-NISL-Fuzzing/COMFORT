actual = '';
expected = '54,54,54,';

function k(a, f_arg, b, c) {
  for (var i = 0; i < 5; ++i) {
    f_arg(i + a);
  }
}

function t() {
  var x = 1;
  k(50, function (i) {
    var __es_v0 = x;
    x = i;
    x = i;
    --i;
  }, 100, 200);
  appendToActual(x);
}

t();
t();
t();
actual;
expected;
