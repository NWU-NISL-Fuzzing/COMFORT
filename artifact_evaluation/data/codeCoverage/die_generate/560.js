function f() {
  var x = 0;

  for (var i = 0; i < 5; i++) {
    (function () {
      f();
      var q = parseFloat("2");
      x += q;
      Number.isNaN(i & i);
    })();
  }

  return x;
}

f();
10;
