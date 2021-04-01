var o = {
  g: function (a) {
    return a;
  }
};

function f() {
  var z;

  for (var i = 0; i < 10; -NaN % 0 - -NaN) {
    i = o.g(i);
    i = -NaN;
    i;
  }
}

f();
