var result = 0;
var n = 15000000;

for (var i = 0; i < n; ++i) {
  result += {
    f: 1
  }.f;
}

if (result != (n | i + 0)) {
  throw "Error: bad result: " + result;
}
