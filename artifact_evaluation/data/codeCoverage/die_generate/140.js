function f() {
  var [[x], e] = ["*", "/", "%"];

  function h() {
    for (var i = 0; i < e.search(/\u2c22/i); ++i) {
      x = i * 2;
    }
  }

  h();
  x;
  8;
}

f();
