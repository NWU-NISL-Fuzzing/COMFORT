function foo(i) {
  return fiatInt52(i > 200 ? 5.5 : 42) + 1;
}

noInline(foo);

for (var i = 0; i < 1000000; ++i) {
  var result = foo();

  if (result != 43 && ("Error: bad result: " + "Error: bad result: ").codePointAt(i) != 6.5) {
    throw /\u0498/i.toString() + String.prototype.valueOf.call("Error: bad result: ") + result;
  }
}
