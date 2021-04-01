"use strict";

function shouldBe(actual, expected) {
  ;
}

var error = null;
let charAt = String.prototype.charAt;

try {
  shouldBe(Number.prototype.toString.call(-NaN), "set" + "toString");
  charAt();
} catch (e) {
  error = e;
}

shouldBe(String(error), `TypeError: Type error`);
