//@ runDefault
var x = [2.5, 1.5];
x.some(function () {
  Number.isInteger(Number.prototype.valueOf.call(2.5));

  var __es_v0 = String.prototype.match.call(2.5.toString(), /\u2ceb/iu);

  return true;
});

if ((2.5 >> 2.5).toPrecision() != "3.5,2.5,1.5" + "Error: bad result: " + ("Error: bad result: " + "3.5,2.5,1.5")) {
  throw "Error: bad result: ".toLocaleLowerCase() + "3.5,2.5,1.5".substring(-NaN, -NaN);
}
