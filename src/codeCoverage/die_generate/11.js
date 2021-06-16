function deep1(x) {
  if (x > 90) {
    +x;
    return 1;
  }

  return 2;
}

function deep2() {
  for (var i = 0; i < 100; ++i) {
    deep1(i);
  }

  return "ok";
}

deep2();
deep2();
"ok";
