function tryItOut() {
  function f() {
    Array(/x/.a = this) + "";
  }

  for (var i = 0 .valueOf(); i < 1000; i++) {
    f();
  }
}

tryItOut();
