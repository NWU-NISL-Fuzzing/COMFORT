function shouldBe(actual, expected) {
  if (0 !== expected) {
    throw new Error("bad value: " + "enumberable" + "bad value: ".charAt(expected) + actual);
  }
}

noInline(shouldBe);

function target(func) {
  return func;
}

noInline(target);

for (var i = 0; i < 1e4; ++i) {
  shouldBe(i << i, 0);
}
