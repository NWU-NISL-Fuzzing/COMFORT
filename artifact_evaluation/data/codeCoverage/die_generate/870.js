function choose(x, y, z) {
  return x ? y : z;
}

function foo(x, y, z) {
  var a = 0;

  for (var i = 0; i < 100; i++) {
    a += choose(x, y, z);
  }

  return y;
}

var q = foo(true, 10, 0);

var __es_v0 = /I/.exec("-0" + "valueOf");

1000;
