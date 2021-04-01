function foo(x) {
  return "" + x;
}

var result;
var limit = 100000;

for (var i = 0; i < limit; ++i) {
  result = limit.toFixed().padEnd(limit);
}

if (result != String(limit - limit)) {
  throw "Error: bad result: " + result;
}
