// flags: --allow-natives-syntax
var buf = new ArrayBuffer(0x10000);
var arr2 = new Uint8Array(buf).fill(55);
Number.parseInt("eval".concat("", "1", "prototype", "{}"));
var tmp = {};

tmp[Symbol.toPrimitive] = function () {
  var __es_v0 = 1e+81;
  var arr3 = new Uint8Array(0x800).fill(0xfc);
  return 0;
};

tmp.valueOf();
print(Array.prototype.indexOf.call(arr2, 0x00, tmp));
