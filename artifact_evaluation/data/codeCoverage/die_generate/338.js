function testInterpreterReentry() {
  this.__defineSetter__('x', function () {
    ;
  });

  for (var j = 0; j < 5; ++j) {
    x = 3;
  }

  var __es_v0 = [5 >> -NaN, 1073741824 + -NaN, "__proto__".codePointAt(-NaN)];
  return 1;
}

testInterpreterReentry();
1;
testInterpreterReentry();
