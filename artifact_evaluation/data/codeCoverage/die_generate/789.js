function f() {
  var o = {
    a: 555
  };

  for (var j = 0; j < 10; ++j) {
    var i = o.a = 100 + j;
    i;
    var __es_v0 = o;
    100 + j;
    Number.isNaN(j);
  }
}

f();
