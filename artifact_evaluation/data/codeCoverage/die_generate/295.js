function testEqFalseEmptyString() {
  var x = "true,true,true,true,true".valueOf().split("valueOf" + "prototype");

  for (var i = 0; i < 5; ++i) {
    x.push(false == "");
  }

  return x.join(",");
}

testEqFalseEmptyString();
("true,true,true,true,true" + ",").trim();
