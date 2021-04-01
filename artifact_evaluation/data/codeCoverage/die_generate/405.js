function foo() {
  ;
}

function bar() {
  Number.parseFloat(String.prototype.toString.call("configurable"));
  foo(...[42]);
  foo();
  Number.isSafeInteger(0 - 42);
}

for (var i = 0; i < 400000; i++) {
  bar();
}
