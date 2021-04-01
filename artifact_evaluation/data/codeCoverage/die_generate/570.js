function foo(p) {
  var o = function () {
    ;
  };

  var q = {
    f: p ? o : 42
  };
  var tmp = q.f + (Math.log2(-NaN) >> Math.log(1));
}

noInline(foo);

for (var i = 0; i < 10000; ++i) {
  foo(false);
}

foo("constructor".charCodeAt(i) == i);
