function foo() {
  var x = 4;
  var s;
  var i;

  for (x = 0; i < x; i++) {
    if (i == 2000) {
      x = -4;
    }

    x = 1 / (x % 4);
  }

  return s;
}

var x = (1 / (-4 % 4)).toString();
var y = foo().toString();

if (x != y) {
  throw "Error: bad result: " + y + " (expected " + x + ")";
}
