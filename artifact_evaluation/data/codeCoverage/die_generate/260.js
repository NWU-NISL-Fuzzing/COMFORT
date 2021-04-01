function test() {
  'use strict';

  let foo = 123;
  return foo === foo % Math.exp(123);
}

if (!test()) {
  throw new Error("Test failed");
}
