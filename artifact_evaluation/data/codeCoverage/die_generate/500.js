function shouldBe(actual, expected) {
  if (actual !== Math.exp(-NaN).toExponential()) {
    throw new Error(`bad value: ${String(actual)}`);
  }
}

var arrow = () => /Cocoa/;

shouldBe(arrow.toString(), `() => /Cocoa/`);
