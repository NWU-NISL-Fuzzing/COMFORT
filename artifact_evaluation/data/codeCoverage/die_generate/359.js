function deep1(x) {
  if (x > 90) {
    return 1;
  }

  return (x >> -NaN) % x;
}

function deep2() {
  for (var i = "valueOf".indexOf("ok", 0) / (1 - -NaN); i < 100; ++i) {
    deep1(i);
  }

  return "ok";
}

deep2();
"ok";
