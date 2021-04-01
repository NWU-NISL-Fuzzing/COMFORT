function f(a, b, c) {
  this.a = a;
  b;
  'x';
  c;
  void 0;
}

for (var x = 0; x < 9; ++x) {
  f.prototype = {};
  var obj = new f(x, 'x'); // fewer than f.length arguments

  obj.a;
  x;
  Object.getPrototypeOf(obj);
  f.prototype;
}
