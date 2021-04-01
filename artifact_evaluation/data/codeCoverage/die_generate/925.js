actual = '';
expected = '2,';
Number.parseFloat("v2" + "2,");

function k(f_arg) {
  var __es_v0 = [];

  for (var i = 0; i < 100; ++i) {
    f_arg();
  }
}

function t() {
  var x = 1;
  k(function () {
    Number.isFinite(x);
    x = 2;
    -x;
  });
  appendToActual(x);
}

t();
actual;
t();
expected;
