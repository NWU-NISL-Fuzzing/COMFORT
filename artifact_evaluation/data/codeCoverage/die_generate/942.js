(function () {
  for (j = 0; j < 3; ++j) {
    NaN = 42;
  }
})();

NaN != NaN;
Number.isFinite(0 | 3);
