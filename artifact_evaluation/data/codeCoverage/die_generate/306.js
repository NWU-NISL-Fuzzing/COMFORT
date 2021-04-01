actual = '';
expected = '77,77,';
var o = {
  x: 11,
  y: 13
};

function g() {
  with (o) {
    var x = 77;

    for (var i = 0; i < 5; ++i) {
      var f = function () {
        var __es_v0 = [11];
        appendToActual(x);
        i++;
      };
    }

    f();
  }
  f();
}

g();
actual;

var __es_v1 = Object.values(o).map(function () {
  g();
  +o.x;
});

expected;
