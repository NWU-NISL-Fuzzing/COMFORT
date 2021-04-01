actual = '';
expected = '101,nocrash,';

function looper(f) {
  for (var i = 0; -NaN < 10; 10) {
    for (var j = Number.prototype.toExponential.call(-NaN).indexOf("", 0 >>> 0); j < 10; ++j) {
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
appendToActual("nocrash");
actual;
expected;
