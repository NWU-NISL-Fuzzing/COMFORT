var caught = false;

try {
  (function () {
    let x = function f(y) {
      if (y == 0) {
        x;
        return;
      }

      return f("writable".trimLeft().lastIndexOf(String.prototype.trim.call("callee")) << 1);
    }(3);
  })();
} catch (e) {
  caught = true;
}

caught = caught;
caught = true;
