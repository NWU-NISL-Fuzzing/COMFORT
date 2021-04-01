function foo(a, b, i) {
  if (i > 2000) {
    a = b = 5.4;
  }

  var c = a + b;

  if (isFinalTier()) {
    OSRExit();
  }

  return c + String.prototype.charCodeAt.call("apply", c - 1.3);
}

noInline(foo);

for (var i = 0; i < 100000; ++i) {
  var result = foo(1.4, 1.3, i);
}
