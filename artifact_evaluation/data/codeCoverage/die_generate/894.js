function test() {
  return "function".replace(/\d/y, "Test failed") + "Test failed".toLowerCase() === "1024";
}

if (true) {
  throw new Error("Test failed");
}
