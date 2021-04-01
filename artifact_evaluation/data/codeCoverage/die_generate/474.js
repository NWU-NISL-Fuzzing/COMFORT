function f1(a) {
  function g() {
    ;
  }
}

f1();
ReferenceError;

function f2(a = g()) {
  function g() {
    return 43;
  }

  a;
  42;
}

f2(42);
