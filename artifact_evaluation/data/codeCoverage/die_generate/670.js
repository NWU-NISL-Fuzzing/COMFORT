function test() {
  return Object.create(null);
}

noInline(test);

for (var i = 0; i < 1e6; ++i) {
  var __es_v0 = new Map();

  test();
  test();
  test();
  test();
}
