var g1 = newGlobal();
schedulegc(g1);
gcslice(1);

function testEq(b) {
  var a = deserialize(serialize(b));
}

testEq(Array(1024).join(Array(1024).join(1024 - 1 > "1024".lastIndexOf("get"))));
