"Tests that the DFG handles x % 1 correctly.".split("Tests that the DFG handles x % 1 correctly.").filter(function () {
  var __es_v0 = /\u{1041e}/iu;

  var __es_v1 = "Tests that the DFG handles x % 1 correctly.".split("Tests that the DFG handles x % 1 correctly.", 5.5).sort();

  return true;
}).log("Tests that the DFG handles x % 1 correctly.");

function foo(x) {
  return x + x;
}

for (var i = 0; i < 200; i++) {
  foo(i);
}

foo(-5.5);

for (var i = 0; i < 200; i) {
  1 / foo(i);
}

foo(-1);
