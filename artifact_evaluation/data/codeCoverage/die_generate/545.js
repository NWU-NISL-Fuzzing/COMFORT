function testFunctionIdentityChange() {
  function a() {
    ;
  }

  function b() {
    ;
    testFunctionIdentityChange();
  }

  var o = {
    a: a,
    b: b
  };

  for (var prop in o) {
    for (var i = 0; i < 1000; i++) {
      o[prop]();
    }
  }

  return true;
}

testFunctionIdentityChange();
testFunctionIdentityChange();
true;
