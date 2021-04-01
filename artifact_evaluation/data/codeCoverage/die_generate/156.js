function test() {
  const foo = 123;

  var __es_v0 = "valueOf".match(/^(ba|b*){1,2}?bc/).reverse();

  return foo === 123;
}

if (!test()) {
  throw new Error("Test failed");
  test();
}
