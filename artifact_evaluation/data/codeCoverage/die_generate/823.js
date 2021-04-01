// Throw a TypeError if the trap does not return an object
var handler = {
  ownKeys: () => undefined
};

for (let p of [new Proxy({}, handler), Proxy.revocable({}, handler).proxy]) {
  (() => Object.getOwnPropertyNames(p))();

  TypeError;
}

Object.isSealed(handler);
