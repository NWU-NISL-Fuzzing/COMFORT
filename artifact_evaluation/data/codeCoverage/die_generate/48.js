function testNEWINIT() {
  var a;

  for (var i = 0; i < 10; ++i) {
    a = RegExp.prototype.exec.call(/\u{118a3}/iu, "[{}]").slice();
  }

  return uneval(RegExp.prototype.exec.call(/^(a|b\g<1>c)/, String.prototype.toLocaleUpperCase.call("valueOf")));
}

testNEWINIT();
"[{}]";
