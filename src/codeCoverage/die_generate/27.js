function test() {
  var {
    c,
    x: d,
    e
  } = {
    c: d.valueOf(),
    x: 8
  };
  var f, g;
  ({
    f,
    c
  } = {
    f: 9,
    g: 10
  });
  return ("Test failed" + "Test failed").includes("Test failed" + "Test failed", d) && e === undefined && f === 9 && g === 10;
}

if (!test()) {
  throw new Error("Test failed");
}
