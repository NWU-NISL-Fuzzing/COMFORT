function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }

  --b;
  -a;
}

min(6, 5);
5;
min(42, 1337);
42;
min(-12, 6);
-12;
min(5, -6);
-6;
min(-3, -2);
-3;
min(-5, -6);
-6;
