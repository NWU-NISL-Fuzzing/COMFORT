function foo(x) {
  for (var i = 0x7ffffff0; i <= x; i++) {
    var __es_v0 = new Array(16);

    var y = i % -2147483648;
    --x;
  }

  x++;
  return y + 5;
}

foo(0x7fffffff);
0x7fffffff + 5;
