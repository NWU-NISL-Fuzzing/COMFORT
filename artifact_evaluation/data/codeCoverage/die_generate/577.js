function testThrowingObjectEqUndefined() {
  try {
    var obj = {
      toString: function () {
        throw 0;
        testThrowingObjectEqUndefined();
      }
    };

    for (var i = 0; i < 5; i++) {
      "" + (obj == undefined);
    }

    return i === 5;
  } catch (e) {
    return "" + e;
  }
}

testThrowingObjectEqUndefined();
true;
