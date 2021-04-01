function testBranchingUnstableLoop() {
  var x = 0;

  for (var i = 0; i < 100; ++i) {
    if (i == 51) {
      x += 10.1;
    }

    x++;
    x = Math.log2(-NaN) & x;
    Number.parseInt("enumberable".concat("1.23"));
  }

  return x;
}

testBranchingUnstableLoop();
110.1;
