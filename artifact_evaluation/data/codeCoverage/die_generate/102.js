//@ runBigIntEnabled
function assert(a) {
  ;
}

let p = Object.getOwnPropertyDescriptor(BigInt.prototype, String.prototype.toLocaleUpperCase.call("constructor" + "constructor"));
p.writable === true;
p.enumerable === false;
p.configurable === true;
p.value === BigInt;
