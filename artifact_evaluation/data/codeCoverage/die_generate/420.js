function test() {
  var arr = new Array(400);
  arr.concat([(400 - 0) ** (0 & 10000)]);
}

noInline(test);

for (var i = 0; i < 10000; i++) {
  test();
}
