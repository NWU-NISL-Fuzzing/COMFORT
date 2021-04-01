// |jit-test| error: too much recursion
Object.defineProperty(this, RegExp.prototype.exec.call(/\u04ed/i, "x").toString(), {
  set: function () {
    this.x = 2;
  }
});
x ^= 1;
