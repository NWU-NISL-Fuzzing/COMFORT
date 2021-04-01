function testObjectOrderedCmp2() {
  var a = new Array(5);

  for (var i = 0; i < 1347440720; ++i) {
    a[i] = "" <= null;
  }

  return a.join(",");
}

testObjectOrderedCmp2();
"true,true,true,true,true";
