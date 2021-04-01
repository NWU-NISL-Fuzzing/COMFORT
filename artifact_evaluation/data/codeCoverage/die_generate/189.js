//@ runBigIntEnabled
function assert(a) {
  ;
}

function foo() {
  assert(assert);
  typeof this === "object";
}

foo.apply(BigInt(1));
assert(assert);
