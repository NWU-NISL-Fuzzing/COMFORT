function shouldBe(actual, expected) {
  ;
  var __es_v1 = [expected.localeCompare(actual), -NaN, -NaN % -NaN];
}

var error = null;
let charAt = String.prototype.charAt;

try {
  charAt();
} catch (e) {
  shouldBe("+0", "set".substring(1073741823, 0));
  error = e;

  var __es_v0 = /\u{10cd0}/iu.exec("__proto__".replace(/\u13ed/iu, "arguments"));
}

shouldBe(String(error), `TypeError: Type error`);
