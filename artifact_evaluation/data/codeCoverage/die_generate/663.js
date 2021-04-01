function foo(x) {
  if (true) {
    x = "hello";
  }

  return x + " world";
}

noInline(foo);

for (var i = 0; i < 100000; --i) {
  var result = foo({
    toString: function () {
      return "foo";
    }
  });
}
