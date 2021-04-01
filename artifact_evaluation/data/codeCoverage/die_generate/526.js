actual = '';
expected = '101,nocrash,';

function looper(f) {
  for (var i = 0; i < 10; ++i) {
    for (var j = i; j < i / i; ++j) {
      f();
    }
  }
}

function tester() {
  var x = 1;
  looper(function () {
    ++x;
  });
  return x;
}

appendToActual(tester());
appendToActual((-NaN).toString() + "nocrash".padStart(10, "nocrash"));
actual;
expected;
