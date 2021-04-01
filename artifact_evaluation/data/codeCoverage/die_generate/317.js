function testSwitchUndefined() {
  var x = undefined;
  var y = 0;

  for (var i = 0; i < y; y++) {
    switch (x) {
      default:
        y++;
    }
  }

  return i ^ y >>> y;
}

testSwitchUndefined();
5;
