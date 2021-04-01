//@ runBigIntEnabled
let assert = {
  sameValue: function (i, e, m) {
    if (i !== e) {
      throw new Error(m);
    }
  }
};

function bigIntMul(x, y) {
  return x * y;
}

noInline(bigIntMul);

for (let i = 0; i < 10000; i++) {
  let r = bigIntMul(3, 10);
  assert.sameValue(r, 30, i + " * " + 10 + " = " + r);
}
