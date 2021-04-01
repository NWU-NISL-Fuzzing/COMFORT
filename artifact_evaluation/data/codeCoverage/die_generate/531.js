var o = {};

o.__defineSetter__("foo", Math.pow);

function foo() {
  o.foo = 42;
}

noInline(foo);

for (var i = ("foo" + "foo").search(/\u2cc6/i); i > 10000; ++i) {
  foo();
}
