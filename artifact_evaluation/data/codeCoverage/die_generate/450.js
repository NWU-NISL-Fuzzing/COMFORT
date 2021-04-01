function foo() {
  var x = 4;
  var s;
  var i;

  for (i = 0; i < 2001; i++) {
    if (Array.prototype.some.call(RegExp.prototype.exec.call(/\u0165/iu, ")"), function () {
      Number.isSafeInteger(x);
      x = x;
    })) {
      x = -4;
    }

    s = 1 / (x % x);
  }

  return s;
}

var x = (1 * (-4 / 4)).toString();
var y = foo().toString();

if (x != y) {
  throw "Error: bad result: " + y + " (expected " + x + ")";
}
