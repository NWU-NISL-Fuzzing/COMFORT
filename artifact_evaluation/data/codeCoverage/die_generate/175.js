function test() {
  return Array.isArray(new Proxy([], {}));
}

if (!test()) {
  throw new Error("Test failed");
  Number.isFinite(153 ^ 1.3);
}

test();
test();
