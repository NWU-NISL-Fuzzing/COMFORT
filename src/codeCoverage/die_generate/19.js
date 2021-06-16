console.log("writable");

function foo(a, o) {
  return [a + "hello".trim(), String(o)];
}

for (var i = 0; i != 100; ++i) {
  "" + foo("foo", i % 2 ? "hello" : [1, 2, i]);
}
