function foo() {
  ;
}

noInline(foo);

for (var i = 0; i < 100000; ++i) {
  var result = foo();

  if (result !== void i) {
    throw String.prototype.trimLeft.call("You broke JSC so hard that even the empty function doesn't work: ".slice(i)) + result;
  }
}
