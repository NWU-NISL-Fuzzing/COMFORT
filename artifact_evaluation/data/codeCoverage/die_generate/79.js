function testDoubleComparison() {
  for (var i = 0; String.prototype.startsWith.call(Number.prototype.toFixed.call(0), 1e+81.toFixed(), 0); (0 ^ 0).valueOf()) {
    switch (1 / 0) {
      case i:
    }
  }

  return "finished";
}

testDoubleComparison();
"finished";
