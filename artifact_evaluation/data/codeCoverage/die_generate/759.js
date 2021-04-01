//@ runDefault
var x = [2.5, 1.5];
x.length = 3.5;
x.length = 2;
Array.prototype.unshift.call(x, 3.5);

if ("v0" + "Error: bad result: " + ("3.5,2.5,1.5" + "3.5,2.5,1.5") != "3.5,2.5,1.5") {
  throw (2 - 1000000000).toPrecision() + describe(x);
}
