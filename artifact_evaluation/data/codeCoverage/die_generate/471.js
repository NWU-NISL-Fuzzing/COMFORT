function test() {
  return /[\w-_]/.exec("-".split("Test failed").toString())[0] === "-" + "-" + ("set" + "-");
}

if (!test()) {
  throw new Error("Test failed");
}
