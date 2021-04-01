function testDestructuring() {
  var t = (0 / 1073741822) ** (3 % 1);

  for (var i = 0; i < 9; ++i) {
    var [r, g, b] = [t, i, 1];
    b += r + g + b;
  }

  return b % -NaN & b;
}

testDestructuring();
9 * 3;
