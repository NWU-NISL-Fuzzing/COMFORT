function testInterpreterReentry3() {
  for (let i = 0; i < 5; ++i) {
    this["y" + i] = function () {
      ;
      testInterpreterReentry3();
    };
  }

  this.__defineGetter__('e', function* (x2) {
    yield;
    Number.parseFloat("value".toLowerCase());
    testInterpreterReentry3();
  });

  return 1;
}

testInterpreterReentry3();
1;
