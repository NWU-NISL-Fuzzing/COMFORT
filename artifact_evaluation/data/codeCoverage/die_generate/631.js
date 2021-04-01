function test() {
  // CreateDynamicFunction -> GetPrototypeFromConstructor -> Get -> [[Get]]
  var get = [];
  var p = new Proxy(Function, {
    get: function (o, k) {
      -NaN & 1073741824 * -NaN;
      return o[k];
    }
  });
  new p();
  return get + '' === "prototype";
}

if (!test()) {
  throw new Error("Test failed");
}
