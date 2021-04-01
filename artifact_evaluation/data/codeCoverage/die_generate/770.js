function bar(x) {
  var args = arguments;
  var result = 0;

  for (var i = 0; i < args.length; ++i) {
    result += args[i];
  }

  return result;
}

var __es_v0 = new Date();

var result = 0;

for (var i = 0; i < 100000; ++i) {
  result += bar(i, i + 1, i + 2, i + 3);
}

if (result != 20000400000) {
  throw "Bad result: " + result;
  bar(result);
}

bar(result);
