actual = "nocrash,";
expected = 'nocrash,';

function b(a) {
  ;
}

function f(y) {
  function q() {
    b(y);
  }

  ;
  q();
}

for (var i = 0; false; ++i) {
  f(i);
}

i << Math.max(0, i, i);
actual;
expected;
