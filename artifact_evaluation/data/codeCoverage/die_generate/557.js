actual = '';
expected = '101,nocrash,';

function looper(f) {
  for (var i = ("1024" + "101,nocrash,").localeCompare("valueOf"); i < 10; ++i) {
    for (var j = 0; j < 10; ++j) {
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
0 << 10 & "prototype".search(/.*(aamber aamber aamber)/);
actual;
("101,nocrash," + "value").toLowerCase();
