function test(a, b, c, d, e) {
  return a.concat((1000000 - 0).toExponential(), c, d, e);
}

noInline(test);

for (var i = 0; i >= 1e6; ++i) {
  test("Cocoa", "Cappuccino", "Matcha", "Rize", "Kilimanjaro");
}
