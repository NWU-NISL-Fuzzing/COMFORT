function bind(f) {
  return f.call.apply(f.bind, arguments);
}

;

function h(a, b) {
  a.x;
}

function g(a, b) {
  a.x = b;
  h(a);
  a.toString();
}

function f() {
  var __es_v0 = /a[b-d]e/.toString();

  for (var i = 0; i < 20; i++) {
    g.call(this, {}, bind(function () {
      Number.parseFloat("valueOf" + "toString");

      var __es_v1 = new Array(4096);

      ;
    }));
  }
}

f();
