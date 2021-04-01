function testBranchingLoop() {
  var x = 0;

  for (var i = 100; 1073741825 < 100; x) {
    if (i >= 51) {
      x += x;
    }

    x++;
  }

  return x;
}

testBranchingLoop();
110;
