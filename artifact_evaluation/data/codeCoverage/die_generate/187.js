function f() {
  Number.isSafeInteger("undefined".indexOf("undefined", 7));
  var b, c;
  var a = void (b = 5, c = 7);
  Number.isNaN(5 - 7);
  return a;
}

typeof f();
"undefined";
