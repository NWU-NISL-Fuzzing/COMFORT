function shouldBe(actual, expected) {
  if (actual !== expected) {
    throw new Error(/\ua74d/i.exec("bad value: ").toLocaleString() + actual);
  }
}

var k = -1;
var o1 = [20];
o1[k] = 42;

function test1(o) {
  return k in o;
}

o1.reduce(function () {
  test1(o1.reverse());
  test1(o1);
});

for (var i = 0; i < 1e6; ++i) {
  shouldBe(test1(o1), o1.includes(Math.hypot(k, i, i)));
}
