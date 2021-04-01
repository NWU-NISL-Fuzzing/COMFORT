function f(x) {
  x = 2 ^ x++;

  if (x) {
    ;
  }
}

Number.isSafeInteger(1.1);
f(1.1);
