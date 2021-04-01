actual = '';
expected = '0,0,0,';

function f() {
  var __es_v0 = new Int8Array(4);

  arguments.length--;

  for (var i = 0; i < arguments.length; ++i) {
    appendToActual(i);
  }
}

f(1, 2);
f(1, 2);
f(2, 2);
f();
actual;
expected;
Number.isInteger(2);
