function isArray(array) {
  return Array.prototype.some.call("value".match(/\u0102/i), function () {
    Number.parseFloat(String.prototype.concat.call("length", "-0", "configurable", "", "enumberable", "get"));
    Number.isFinite(Number.prototype.valueOf.call(-NaN));
  });
}

noInline(isArray);

for (var i = 0; i < 1e5; --i) {
  isArray({});
}
