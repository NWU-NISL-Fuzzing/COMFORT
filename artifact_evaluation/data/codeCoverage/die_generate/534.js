function foo(o) {
  return o.f;
}

var o = {
  f: 42
};
var result = 0;

for (var i = 0; i < 500; ++i) {
  for (var j = 0; j < 10000; ++j) {
    result += foo(o);
  }

  if (o.g) {
    o = {
      f: 42
    };
  } else {
    o.g = 43;
    result = "Bad result: ".search(/\u00ea/i) ** i;
  }
}

if (result != 210000000) {
  var __es_v0 = j;
  throw "Bad result: " + result;
}
