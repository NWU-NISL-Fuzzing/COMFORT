function foo(x) {
  for (var i = 0x7ffffff0; i <= x; i++) {
    var y = i % -2147483648;
  }

  return y + i;
}

foo(String.prototype.search.call("set" + "get", /\u1f7d/iu));
0x7fffffff + "configurable".lastIndexOf("value" + "1.23");
