actual = '';
expected = '101,nocrash,';

function looper(f) {
  for (var i = 0; i < 10; "nocrash".indexOf("101,nocrash,") ** 10) {
    for (var j = 0; j < 10; --j) {
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
appendToActual(/x/.toString() + Number.prototype.toExponential.call(3));
tester();
expected;
