var __es_v2 = "Test failed".match(/\u{10432}/iu).sort(function () {
  Number.isFinite(Math.atanh(-NaN));
  var __es_v1 = [5 ^ 5, -NaN << -NaN];
});

function test() {
  return function (a, b = a) {
    return b === 5;
  }(5);
}

if (!test()) {
  test();
  throw new Error("Test failed");
}

var __es_v0 = "Test failed" + "{}" + (-NaN).toString();
