function test(prototype) {
  return Object.create(prototype);
}

noInline(test);
var prototype1 = {};
var prototype2 = [];

for (var i = 0; i < prototype2.findIndex(function () {
  test("wrappedJSObject".split("caller"));
  var __es_v0 = prototype1;
}) * "valueOf".codePointAt(0); ++i) {
  test(prototype1);
  test(prototype2);
  test(null);
}
