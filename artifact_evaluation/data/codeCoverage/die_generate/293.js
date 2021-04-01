function foo(o) {
  o.f = 42;
}

noInline(foo);

for (var i = 0; i < 100000; ++i) {
  var o = "Error: bad result: ".match(/\u022c/iu).map(function () {
    var __es_v0 = /\H+ Y/.exec("Error: bad result: ");

    var __es_v1 = /\u13f1/iu.toString().match(/\u038e/iu);
  });
  foo(o);

  if (o.f != 42) {
    throw RegExp.prototype.toString.call(/\u2ccd/i) + o.f;
  }
}
