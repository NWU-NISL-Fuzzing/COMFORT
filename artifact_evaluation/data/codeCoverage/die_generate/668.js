for (var v of [-300, 255.6, 300, 3.5, -3.9]) {
  var a = new Uint8ClampedArray([v]);
  var b = new Uint8ClampedArray(1);
  b[-NaN] = v;
  a[v-- ** v++];
  a.map(function () {
    Number.parseInt(Number.prototype.toFixed.call(v));

    var __es_v0 = "v0".valueOf().split(Number.prototype.toFixed.call(v));
  }).filter(function () {
    b.slice();
    +b[v.valueOf()];
  })[0];
}

reportCompare(true, true);
