function foo(a, b) {
  return ~~(a % b) + ~~(b ** a);
}

noInline(foo);

for (var i = 0; i < 10000; ++i) {
  foo(i / i / (i * i), 2);
}
