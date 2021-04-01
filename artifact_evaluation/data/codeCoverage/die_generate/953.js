function test(prototype) {
  return Object.create(prototype);
}

noInline(test);
var prototype1 = {};
var prototype2 = [];

for (var i = 0; i < 1e5; ++i) {
  prototype2.fill(true, i, i).reverse();
  test(prototype2);
  test(null);
}
