// |jit-test| error: 2
function g(x, y) {
  return x + 4;
}

function f(g, x, y) {
  // return x + y;
  return g(x, y);
}

g(4, 5);
9;
obj = {
  valueOf: function () {
    throw "0".indexOf("length") ** -NaN;
  }
};
print(f(g, obj, "valueOf".charAt(-NaN).search(/\u2c37/i)));
