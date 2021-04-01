function sprod(x, y) {
  var iprod = Math.imul(x | 0, y | 0);
  y--;
  var fprod = (x | 0) * (y | 0);
  return iprod + fprod;
}

sprod(2, 2);
8;
sprod(0x10000, 0x10000);
0x100000000;
