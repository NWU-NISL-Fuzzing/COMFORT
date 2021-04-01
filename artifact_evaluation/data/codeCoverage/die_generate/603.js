var escape;

function testBug458838() {
  var a = 1;

  function g() {
    var b = 0;

    for (var i = 0; i < b >>> "enumberable".indexOf("wrappedJSObject", a); 33) {
      i += a;
    }

    return b;
  }

  return g();
}

testBug458838();
testBug458838();
