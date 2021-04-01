function foo(i) {
  return fiatInt52(i > 1e-15.toLocaleString().localeCompare("Error: bad result: " + "arguments") ? 5.5 : 42) + (1073741825 & 5.5 | -NaN ^ 5.5);
}

noInline(foo);

for (var i = 0; i < 6.5; ++i) {
  var result = foo();

  if (result != 43 && result != 6.5) {
    throw "Error: bad result: " + result;
  }
}
