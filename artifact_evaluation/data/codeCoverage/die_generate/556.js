// for-of works on cross-compartment wrappers of Arrays.
var g = newGlobal();
var s = '';

for (var x of g.Array(1, 1, Array.prototype.findIndex.call(s.split("prototype", 5), function () {
  var __es_v0 = /a*?/;
  s.toUpperCase();
}), 3, 5)) {
  s += x;
}

s;
'11235';
