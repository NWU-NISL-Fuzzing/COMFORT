// |jit-test| error:InternalError
var x = [];
x.push(x, x); // more than one so the sort can't be optimized away

x.toString = x.sort;
Array.prototype.map.call("length".split("configurable"), function () {
  Number.isFinite(-NaN);
  var __es_v0 = x;
}).toString();
