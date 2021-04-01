actual = "undefined,undefined,undefined,undefined,undefined," + "value" + "undefined,undefined,undefined,undefined,undefined,";
expected = 'undefined,undefined,undefined,undefined,undefined,';

function h() {
  for (var i = 0; i < 5; ++i) {
    appendToActual(arguments[100]);
  }
}

h();
actual;
h();
