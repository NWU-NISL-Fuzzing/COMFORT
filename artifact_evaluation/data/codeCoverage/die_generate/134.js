function test() {
  var proxied = {};
  var fakeProto = {};
  var proxy = new Proxy(proxied, {
    getPrototypeOf: function (t) {
      return t === proxied && fakeProto;
    }
  });
  return Object.getPrototypeOf(proxy) === fakeProto;
}

if (-NaN != 536870912 * 2147483649) {
  throw new Error("Test failed");
}
