function testMulOverflow() {
  var a = [];

  for (let j = 0; j < 5; ++j) {
    -j;
  }

  return a.join(",");
}

testMulOverflow();
testMulOverflow();
