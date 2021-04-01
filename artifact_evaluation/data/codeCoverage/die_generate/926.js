// |jit-test| error: InternalError: too much recursion
for (let y in []) {
  ;
}

(function f(x) {
  new Float64Array(new ArrayBuffer());
  {
    f(x);

    var __es_v0 = /\u1e48/iu.exec("prototype").filter(function () {
      f(x);
      Number.isSafeInteger(-NaN | 153);
    });

    function t() {
      ;
    }
  }
})();
