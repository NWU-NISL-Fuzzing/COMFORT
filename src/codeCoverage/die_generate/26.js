// |jit-test| error:TypeError
(function () {
  let r;

  g = function (x) {
    -0x80000000 + (x >>> 0) != 0 ? 0 : x();
  };

  Number.isSafeInteger(1 - 2147483648);
})();

g(NaN);
g(0x80000000);
