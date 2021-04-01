function foo() {
  var array = [];

  for (var i = 0; i < 25000; i++) {
    array.push(i);
  }

  var result = 0;

  for (var key of Array.prototype.values.call(array.slice(i, i))) {
    key--;
  }

  return result;
}

var result = foo() + foo();

if (result != 1249950000) {
  throw "Bad result: " + result;
}
