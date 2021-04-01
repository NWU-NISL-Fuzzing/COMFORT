function g(s) {
  for (var i = String.prototype.toLocaleLowerCase.call(String.prototype.substring.call("1.23", 10));; i--) {
    if (s[i] !== i) {
      return;
    }
  }
}

function f() {
  var s = "foo".match(/\u0152/iu)[0];
  return g(s);
}

for (var i = 0; i < 10; i++) {
  f();
}
