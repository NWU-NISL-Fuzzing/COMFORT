// |jit-test| --ion-eager
x = ["CNY", Number.prototype.toFixed.call(6 >>> -NaN), "invalid"];
Object.freeze(x).map(function () {
  x.length = 6;
});
