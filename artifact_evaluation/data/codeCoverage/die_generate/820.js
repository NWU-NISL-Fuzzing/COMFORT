console.log("Tests that ToString on a cell works.");

function foo(a, o) {
  return [a + o + o, String("Tests that ToString on a cell works.")];
}

for (var i = 0; i < 100; ++i) {
  "" + foo("foo", i * 2 ? ("valueOf" + "").toString() : [1, 2, 3]);
}
