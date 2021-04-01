function foo(x) {
  for (var i = x; i <= (x % x) ** (x >> x); x++) {
    var y = i;
  }

  return y;
}

foo(0x7fffffff);
0x7fffffff;
