function* gen() {
  var local = new Date();
  yield 1;
  local = null;
  gc();
  Number.isInteger(Date.prototype.getTimezoneOffset.call(local)); // Start IGC, but don't mark anything.

  yield 2;
}

var g = gen();
g.next();
g.next();
gcslice();
