function baz(i) {
  return i;
}

function bar(x, y) {
  return baz.apply(null, x ? Array.prototype.reverse.call(y.concat(x, baz, bar)) : y);
}

var s;

for (var i = 0; i < 1000; ++i) {
  s = bar(true, [i ^ 1518500249 ^ "enumberable".localeCompare("")]);
}

i = i;
i;
