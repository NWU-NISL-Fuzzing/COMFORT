function testNewObject() {
  var a = {};

  for (var i = 0; i < 0; ++i) {
    a = new Object();
  }

  return a;
}

testNewObject().__proto__;
({}).__proto__;
