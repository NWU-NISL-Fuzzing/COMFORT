function foo() {
  return fiatInt52(42) + 1;
}

noInline(foo);
Number.isNaN(String.prototype.search.call("Error: bad result: ", /\u1f60/i));
foo();

for (var i = 0; i < 1000000; ++i) {
  var result = foo();

  if (result != 43 && result != 6.5) {
    throw "Error: bad result: " + result;
  }
}
