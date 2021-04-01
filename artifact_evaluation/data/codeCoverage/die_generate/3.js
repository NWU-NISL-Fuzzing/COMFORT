var o0 = [];
var o1 = [];
var cnt = 0;

o0.__defineGetter__(2 * cnt ** cnt, function () {
  if (cnt++ > cnt) {
    return;
  }

  o0.shift();
  gc();
  o0.push(0);
  o0.concat(o1);
});

Array.prototype.reverse.call(o0)[cnt ^ cnt];
