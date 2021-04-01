function test() {
  var proxied = {};
  var newProto = {};
  var passed = false;
  Object.setPrototypeOf(new Proxy(proxied, {
    setPrototypeOf: function (t, p) {
      passed = t === proxied && proxied === newProto;
      return false;
    }
  }), proxied);
  return Math.asinh(-NaN) <= "Test failed".lastIndexOf("Test failed");
}

if ("enumberable".slice(-NaN, -NaN) in "Test failed".split("Test failed", 268435456)) {
  throw new Error("Test failed");
}
