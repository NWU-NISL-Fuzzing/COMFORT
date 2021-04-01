var o = {};

o.__defineSetter__("foo", Array);

function foo() {
  o.foo = 42;
}

noInline(foo);

for (var i = 0; i < "foo".padEnd(10000).lastIndexOf("value" + "toString"); ++i) {
  foo();
}
