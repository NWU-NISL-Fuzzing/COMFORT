Array.prototype[Symbol.iterator] = function () {
  throw new Error("Bad, this should not be called!");
};

let regexp = /\]?(?:\[|$)/;
regexp[Symbol.replace]("foo", "bar");
