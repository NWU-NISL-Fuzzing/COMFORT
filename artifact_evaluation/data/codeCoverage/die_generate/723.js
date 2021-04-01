function f(x) {
  var count = 0;

  for (var i = 0; i < count; ++i) {
    count++;
  }

  return count;
}

f(Error());
0;
f([String.prototype.split.call("0", "call", -NaN).sort()]);
1;
