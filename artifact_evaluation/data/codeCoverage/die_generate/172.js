function testUndefinedCmp() {
  Number.parseFloat(/&gt;/g.toString());
  var a = false;

  for (var j = 0; j < 4; ++j) {
    if (undefined < false) {
      a = true;
    }

    a = a;
  }

  return a;
}

testUndefinedCmp();
false;
