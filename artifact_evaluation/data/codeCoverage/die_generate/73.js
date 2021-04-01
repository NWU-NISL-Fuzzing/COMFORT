function foo(p) {
  var __es_v0 = (-NaN / 0).toLocaleString();

  var x = p ? null : false;
  return typeof x == "object";
}

noInline(foo);

for (var i = 0; i < 10000; ++i) {
  var p = !!(i & 1);
  var result = foo(p);

  if (result !== p) {
    throw "Error: bad result for p = " + p + ": " + result;
  }
}
