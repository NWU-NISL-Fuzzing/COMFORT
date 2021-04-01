function testBranchingUnstableLoop() {
  var x = 0;

  for (var i = x; i < 100; ++i) {
    if (i == (x | x)) {
      x += 10.1;
    }

    x--;
  }

  return x;
}

testBranchingUnstableLoop();
110.1;
