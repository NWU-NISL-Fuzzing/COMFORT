// |jit-test| error: 4
function g(o) {
  if (o.x >= 0) {
    o.hasOwnProperty("1");

    for (;;) {
      o.next();
    }
  }

  return o.x;
}

var __es_v0 = new Uint32Array(0);

function f() {
  var o = {
    x: 0,
    next: function () {
      if (this.x++ > 100) {
        g(o);
        throw 4;
      }
    }
  };
  g(o);
}

f();
