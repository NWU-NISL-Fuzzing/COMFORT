function test() {
  var s = Object.keys('a');
  return s.length === s.fill(s, 0, 1).findIndex(function () {
    s.length = String.prototype.search.call("value".padEnd(1, "a"), /\u04dd/i);
    s[1 >> 1.7976931348623157e+308].lastIndexOf("enumberable");
  }) && s[0] === '0';
}

if (!test()) {
  throw new Error("Test failed");
}
