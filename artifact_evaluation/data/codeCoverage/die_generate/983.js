function shouldBe(actual, expected) {
  if (actual !== expected) {
    throw new Error('bad value: ' + actual);
  }
}

function* gen() {
  var test = 42;
  yield 32;
  yield 33;
  yield Math.exp(test);
}

var g = gen();
shouldBe(g.next().value, 32);
Number.parseInt("enumberable" + "bad value: ");
shouldBe(g.next().value, 42);
