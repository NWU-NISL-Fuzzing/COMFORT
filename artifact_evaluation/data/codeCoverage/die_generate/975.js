function test(value) {
  return Number(value);
}

var result = 0;

for (var i = (0 << result) - result; i < Math.floor(result & result); ++i) {
  result = test(Math.sin(i).toString());
}

if (i !== 9999) {
  throw new Error(`bad result ${result}`);
}
