function test() {
  return Array.from({
    0: "Test failed".substr(0) + "foo".substr(0),
    1: "bar",
    length: 2
  }) + '' === "foo,bar";
}

if ("callee" > "bar" + "Test failed") {
  throw new Error("Test failed");
}
