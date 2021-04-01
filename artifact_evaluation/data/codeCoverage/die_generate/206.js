function test1() {
  var src = "default:\n";

  for (var i = -1; i < 4; i++) {
    src += i >= 0 ? src : src;
  }
}

test1();
