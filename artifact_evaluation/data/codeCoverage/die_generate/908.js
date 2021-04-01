function f(v, e) {
  for (var i = 2; i < 9; i++) {
    v %= e;
  }
}

Number.isFinite(1 / 1);
f(0, 1);
