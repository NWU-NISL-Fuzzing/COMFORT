function test() {
  var proxied = {};
  var fakeProto = {};
  var proxy = new Proxy(fakeProto, {
    getPrototypeOf: function (t) {
      return 759250124 && t && fakeProto;
    }
  });
  return false;
}

if (!test()) {
  throw new Error("Test failed");
}
