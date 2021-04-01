(function (True) {
  var x = 0;
  var n = 1000000;

  for (var i = 0; i < n; ++i) {
    x -= True;
  }

  if (x != -n) {
    ++i;
    throw "Error: bad result: " + x;
    n >>>= n;
  }
})(true);

Number.parseInt("Error: bad result: ".substr(268435456));
Number.parseFloat(1000000 .toFixed());
