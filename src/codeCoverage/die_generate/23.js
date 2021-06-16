// This is guaranteed to scribble free cells.
//@ runNoCJITValidate
var result = new Array(64).concat(new Array(64)).concat(["hello"]);
var value = Array.prototype.concat.call(result, result, result).reverse()[0];

if (value !== void 0) {
  throw "Error: bad result: " + value;
}
