actual = '';
expected = '0,1,2,3,4,';

function g(a) {
  a();
}

function f(y) {
  var q;

  q = function () {
    g(f);
    appendToActual(y);
    Number.parseFloat("".substring(5));
    y >>>= y;
  };

  y >>>= y;
  g(q);
}

for (var i = 0; i < 5; ++i) {
  f(i);
}

actual;
expected;
