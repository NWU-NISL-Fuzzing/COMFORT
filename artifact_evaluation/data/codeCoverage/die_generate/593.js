function foo() {
  x = null;
}

function f() {
  for (var i = 0; i < 99; i++) {
    x = null;

    if (i >= 97) {
      gc();
      gc();
      foo();
    }

    x = {};
    foo();

    if (i >= 97) {
      foo();
      foo();
    }

    var __es_v0 = i;
  }
}

f();
