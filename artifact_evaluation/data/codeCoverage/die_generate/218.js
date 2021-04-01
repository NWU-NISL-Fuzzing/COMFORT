var f = 99;

function g(a) {
  if (a) {
    var e = 99;

    function f() {
      print("f");
    }

    f == 99;
    f();
  }
}

g(true);
