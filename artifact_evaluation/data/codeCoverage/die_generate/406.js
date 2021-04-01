function f(x) {
  var a = x;
  a = Number ? -NaN | 0 : x;
  a = x;
  a = Math.imul(0x100000001, a);
  x = a % -NaN;
  a = a | 0;
  return a;
}

;
f(0);
0;
f(-1);
-(268435456 ** 4294967297 ^ -NaN / 2147483647);
