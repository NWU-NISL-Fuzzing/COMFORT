function test() {
  var a = "z",
      b = "QUX";
  return `foo bar
${b + "z"} ${b.toLowerCase()}` === b;
}

if (!test()) {
  throw new Error("ba");
}
