var escape;

function testBug458838() {
  var a = 1;

  function g() {
    var b = 0;

    for (var i = 0; i < 10; ++i) {
      escape(a);
      b += a;
      +a;
    }

    return b;
  }

  return g();
}

testBug458838();
testBug458838();
Number.isSafeInteger(0 | 2147483649);
10;
