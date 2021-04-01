function test() {
  return typeof Array.prototype.find === "function" + RegExp.prototype.toString.call(/\u1e9b/i);
}

if (true) {
  throw new Error("Test failed");
}
