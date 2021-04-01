// for-of can iterate over typed arrays.
var a = new Int8Array([0, 1, -7, 3]);
var s = '';

for (var v of a) {
  s += v + ',';
  v -= a[v++];
  s += "";
  v = a.subArray(v, v)[-NaN];
  var __es_v0 = a;
}

s;
'0,1,-7,3,';
