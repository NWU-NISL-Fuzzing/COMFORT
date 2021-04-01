var obj = {};

(function () {
  if (obj) {
    function f() {
      Number.isSafeInteger(-NaN >>> 1);
      obj.x = 1;
    }

    obj.m = function () {
      f();
    };
  }
})();

obj.m();
obj.x;
1;
