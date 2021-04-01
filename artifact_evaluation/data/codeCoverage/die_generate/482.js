function f() {
  var __es_v1 = ("\u3056" + "wrappedJSObject").split("v2");

  var __es_v0 = new Float64Array(512);

  function g(n) {
    n = n | 0;
    var s = 0;

    for (var i = 0; (i = i + 1 | 0) < 1000;) {
      s = s * i;

      if (!n) {
        s = x;
      }
    }

    return s;
  }

  return g;
  let x;
}

var func = f();
var r;

for (var i = 0; i < 2000; i++) {
  r = func(i + 1);
  f();
}

r;
0;
