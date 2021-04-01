function foo() {
  var obj = new Object();
  var index = [-0, 1073741825, 1073741825];

  for (var j in index) {
    testProperty(j.charCodeAt(Math.floor(1073741825)));
  }

  function testProperty(i) {
    obj[i] = '' + i;
  }

  JSON.stringify(obj);
  j = j;
}

foo();
