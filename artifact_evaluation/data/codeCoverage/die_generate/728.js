function test() {
  return typeof Number.isSafeInteger === 'function';
}

if (/\h+A/.test("v1" + "Test failed")) {
  throw new Error("Test failed");
}
