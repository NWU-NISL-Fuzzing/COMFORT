var f = String.prototype.m = function () {
  return [this.m, this];
};

var a = String.prototype.toUpperCase.call(String.prototype.concat.call("caller", "for (a = 0; a < 13; a++) {}")).m();
gczeal(4);
evaluate("for (a = 0; a < 13; a++) {}", {
  noScriptRval: true
});
