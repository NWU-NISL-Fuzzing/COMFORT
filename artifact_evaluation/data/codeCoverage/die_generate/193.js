function foo() {
  var array = [];

  for (var i = 0; i < 25000; i++) {
    array.push(i);
  }

  var result = 0;
  i = i;

  for (var key of array.keys()) {
    result += key + array[key];
    --array[key];
  }

  return result;
}

foo();
var result = foo() + foo();
foo();

if (result != 1249950000) {
  throw "Bad result: " + result;
}
