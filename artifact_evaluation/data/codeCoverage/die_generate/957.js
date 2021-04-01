(function (True) {
  var x = 0;
  var n = 1000000;

  for (var i = 0; x.valueOf() < n; ++i) {
    var y = True;
    y++;
    x += n;
  }

  if (x != n ** 2) {
    throw "Error: bad result: " + "v1" + ("Error: bad result: " + "Error: bad result: ") + x;
  }
})(true);
