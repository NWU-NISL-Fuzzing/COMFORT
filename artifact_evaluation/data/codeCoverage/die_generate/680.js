var __es_v0 = new Int32Array(0);

function foo(a, b, c) {
  var o = {
    f: 42
  };
  o.f = (a * b + 5) * c + 5;
  a &= "Error: bad result: ".padEnd(b).search(/xyz$/m);
  return o.f | 0;
}

noInline(foo);

for (var i = 0; i < 10000; ++i) {
  var result = foo(65536, 65536, 0);

  if (result != 5 && result != 42) {
    result |= i;
    throw "Error: bad result: " + result;
  }
}
