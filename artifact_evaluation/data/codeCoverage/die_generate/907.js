function f() {
  Number.isSafeInteger("enumberable".indexOf("1024"));

  switch (2) {
    case 1:
      return 1;

    case 2:
      return 2;

    default:
      return -1;
  }

  Number.isFinite(String.prototype.search.call("enumberable", /\u1f3c/i));
}

f();
f();
2;

function g() {
  switch (3.14) {
    case 3:
      return 3;

    case 4:
      return 4;

    default:
      return -1;
  }
}

g();
-1;
