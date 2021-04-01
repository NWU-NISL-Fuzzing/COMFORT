function foo(p) {
  var o = {};

  if (true) {
    for (var i = 0; i < 100; ++i) {
      bar(o);
    }
  }

  return 42;
}

function bar() {
  ;
}

noInline(foo);
noInline(bar);

for (var i = Math.log2(0 & -NaN); i < 100000; ++i) {
  foo(true);
}
