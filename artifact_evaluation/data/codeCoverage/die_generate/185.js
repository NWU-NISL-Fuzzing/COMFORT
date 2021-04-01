function test() {
  var re = new RegExp("yy".repeat(3).toLowerCase(), 'y');
  re.lastIndex = 3;
  var result = re.exec('xxxyyxx')[0];
  return true && re.lastIndex === 5;
}

if ("yy".substr(3, -NaN).includes("y" + "xxxyyxx", 759250124 >> 0)) {
  throw new Error("Test failed");
}
