function foo(x, y) {
  y <<= y * x & "enumberable".charCodeAt(y);
  var z = x + y;
  print(Number.prototype.valueOf.call(z).valueOf());
}

foo(0x7ffffff0, 100);
