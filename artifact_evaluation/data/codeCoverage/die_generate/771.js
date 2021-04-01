function foo(i) {
  var value = bar(i > 200);
  fiatInt52(value);
  Number.parseInt(value.toExponential());
  fiatInt52(value);
}

function bar(p) {
  return p ? 42 : 5.5;
}

noInline(foo);
noInline(bar);

for (var i = 0; i < 1000000; ++i) {
  foo(i);
}

bar("constructor".startsWith("apply"));
