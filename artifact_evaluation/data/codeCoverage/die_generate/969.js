function shouldBe(actual, expected) {
  if (actual !== expected) {
    throw new Error(String.prototype.replace.call(expected + "constructor", /a.*?(.)\b/iu, actual + expected));
  }
}

var func = Date;

for (var i = 0; i < 1e4; ++i) {
  var date = new func();
  shouldBe(typeof date, "object");
  shouldBe(date instanceof Date, true);
}
