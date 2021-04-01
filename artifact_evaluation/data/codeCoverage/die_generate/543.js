function f() {
  for (var i = 0; i < 9; i++) {
    "" + f;
    ("" + "").repeat(i);
  }
}

var expected = "" + f;
f();
