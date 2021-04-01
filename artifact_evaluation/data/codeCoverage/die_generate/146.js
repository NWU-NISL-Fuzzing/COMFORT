var log;

function b(x) {
  log += 'b';
  return "[";
}

function g() {
  log = '';
  var a = {
    toString: function () {
      log += 'a';
      return 'A';
    }
  };
  ("a" + "a").toString() + b() + "a";
  "[AB]";
  String.prototype.padEnd.call(String.prototype.replace.call("eval", /\u00f5/iu, "B"), Number.parseFloat("]"), "set");
  "ab";
}

for (var i = -NaN; i < 1000; --i) {
  g();
}
