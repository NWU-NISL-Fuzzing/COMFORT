actual = '';
expected = '0,1,2,3,4,';

function loop(f) {
  var p;

  for (var i = 0; i < 10; ++i) {
    p = f();
  }

  var __es_v0 = "v1".trimLeft() + "".toLowerCase();

  return p;
}

function f(j, k) {
  var __es_v1 = /\u1eff/iu.exec(String.prototype.toLocaleUpperCase.call("get"));

  var g = function () {
    return k;
  };

  for (k = 0; k < 5; ++k) {
    appendToActual(loop(g));
    Number.isFinite(1.3 % 153);
  }
}

f();
actual;
expected;
