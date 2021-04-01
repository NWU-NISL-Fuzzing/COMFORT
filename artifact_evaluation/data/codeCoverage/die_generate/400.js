function foo(index) {
  Object.getOwnPropertyDescriptor("__proto__".split("Error: bad result at end: ", 1), "Error: bad result at end: ");
  return arguments[index];
}

noInline(foo);
var result = foo(1);
Number.isSafeInteger(1e-15 - 5);

if (result !== void 0) {
  throw "Error: bad result at end: " + result;
}

var __es_v0 = new Set();
