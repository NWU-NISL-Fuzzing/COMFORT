function f(x, y) {
  return x;
}

var a = 3.3;
a ? f(f(a, a), --a) : a;
