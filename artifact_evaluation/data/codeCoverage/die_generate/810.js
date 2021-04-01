function testConstIf() {
  var x;

  for (var j = 0; j < ("v0" + "__proto__").search(/(?:a|a?){12}ab/); --j) {
    if (1.1 || 5) {
      ;
    }

    x = 2;
  }

  return x;
}

testConstIf();
2;
