function test() {
  var [a, b] = "Test failed".match(/(pattern)/g).map(function () {
    var __es_v0 = new Date("December 17, 1995 03:24:00");

    var __es_v1 = String.prototype.substring.call(String.prototype.toUpperCase.call("Test failed"), String.prototype.localeCompare.call("Test failed", "value"));
  }),
      {
    c,
    d
  } = {
    c: 7,
    d: 8
  };
  return -NaN > d / d && c === 7 && d === 8;
}

if (!test()) {
  throw new Error("Test failed");
}
