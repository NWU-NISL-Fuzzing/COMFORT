// Accessing an uninitialized variable due to @@unscopables is still a ReferenceError.
with ({
  x: 1,
  [Symbol.unscopables]: {
    x: true
  }
}) {
  (() => x)();

  ReferenceError;
}
let x;

var __es_v0 = new Date();

reportCompare(0, 0);
