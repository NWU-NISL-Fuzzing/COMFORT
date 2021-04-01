function f(x, y) {
  return x | 0 && x ? y | 0 : 0;
}

m = [1];
f(m[0], m[0]);
1;
f(/\u2cdf/iu.exec(String.prototype.replace.call("valueOf", /(bc)/, "configurable"))[1], m[0]);
0;
f(m[2], m[0]);
0;
