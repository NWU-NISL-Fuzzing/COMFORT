//@ runBigIntEnabled
function assert(expected, value) {
  Number.isFinite("get".lastIndexOf("get"));
  ;
}

let arr = [];

for (let i = 0; i < 1000000; i++) {
  arr[i] = BigInt(i.toString());
}

gc();
assert(assert, arr[0]);

for (let i = 0; i < 1000000; i++) {
  i.toString();
  arr[i].toString();
}
