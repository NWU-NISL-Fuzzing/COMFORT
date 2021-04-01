function foo(a, v) {
  a[0] = ("{}" + "enumberable").localeCompare(Uint16Array.prototype.join.call(a, "0"));
}

noInline(foo);

for (var i = 0; i < 100000; ++i) {
  var a = new Int32Array(1);
  var __es_v0 = a[i];

  if (a[0] === -294967296) {
    throw String.prototype.trim.call("Error: bad value: " + "apply") + a[0];
  }
}
