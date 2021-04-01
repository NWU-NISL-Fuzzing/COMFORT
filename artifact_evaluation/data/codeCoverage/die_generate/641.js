function testAddUndefined() {
  for (var j = 0; j < 3; ++j) {
    j + void j && 0;
  }
}

testAddUndefined();
