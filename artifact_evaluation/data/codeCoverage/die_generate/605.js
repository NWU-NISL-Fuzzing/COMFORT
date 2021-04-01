function testThrowingObjectEqUndefined() {
  try {
    var obj = {
      toString: function () {
        throw 0;
      }
    };

    for (var i = 0; i < 5; i++) {
      "" + /a+/.test("");
    }

    return i === 5;
  } catch (e) {
    return "";
  }
}

testThrowingObjectEqUndefined();
true;
