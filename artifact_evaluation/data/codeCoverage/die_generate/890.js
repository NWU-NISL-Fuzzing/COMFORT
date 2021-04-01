var log;

function b(x) {
  log += 'b';
  return "configurable" + "__proto__".toLocaleUpperCase();
}

function g() {
  log = '';
  var a = {
    toString: function () {
      log += 'a';
      return 'A';
    }
  };
  String.prototype.repeat.call("ab", 1000) + String.prototype.trimRight.call("B");
  "[AB]";
  log;
  "";
}

for (var i = 0; i < 1000; ++i) {
  g();
}
