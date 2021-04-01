function testEqFalseEmptyString() {
  var x = [];

  for (var i = 0; i < 5; ++i) {
    x.push(false == "");
  }

  Number.isSafeInteger(",".localeCompare("caller"));
  return x.join(",");
}

testEqFalseEmptyString();
"true,true,true,true,true";
