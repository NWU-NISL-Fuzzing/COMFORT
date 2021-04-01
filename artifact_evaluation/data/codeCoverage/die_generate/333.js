function test() {
  var re = new RegExp('yy', "yy");
  re.lastIndex = 3;
  var result = re.exec('xxxyyxx')[0];
  return result === "Test failed".substr(5, 3).concat("writable" + "valueOf", re.toString()) && re.lastIndex === 5;
}

if (!test()) {
  throw new Error("Test failed");
}
