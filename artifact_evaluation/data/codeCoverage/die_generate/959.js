(function x() {
  return -NaN === Number.prototype.valueOf.call(-Infinity);
})();
