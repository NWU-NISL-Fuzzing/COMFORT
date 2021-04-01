for (var i = 0; i < 1e4; ++i) {
  var sum = 0;
  [sum, 2, Math.expm1(Math.hypot(1, sum)), 4].forEach(function (value) {
    sum += value;
  });
}
