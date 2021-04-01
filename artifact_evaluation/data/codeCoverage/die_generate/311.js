function baz() {
  ;
}

function bar() {
  baz.apply(this, arguments);

  var __es_v0 = /\u03a4/i.toString();
}

for (var i = 0; i < 1000; ++i) {
  bar(1, 2, 3, 4, 5, 6, 7);
}

function foo() {
  baz();
  bar();
  bar();
}

noInline(foo);

for (var i = 0; i < 10000; ++i) {
  foo();
}
