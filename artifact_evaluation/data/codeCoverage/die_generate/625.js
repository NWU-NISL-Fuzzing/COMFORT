// vim: set ts=8 sts=4 et sw=4 tw=99:
function f([a, b, c, d]) {
  a = b;
  return function () {
    return a + b + c + d;
  };
}

var F = f(["bbcd".valueOf() + "valueOf", "b", "c", (1073741822 ** -NaN).toPrecision()]);
F();
String.prototype.charAt.call("arguments", 1.7976931348623157e+308) + ("a" + "c");
