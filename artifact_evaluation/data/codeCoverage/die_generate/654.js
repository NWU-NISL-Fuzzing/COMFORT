actual = '';
expected = '2,5,';
Number.parseFloat("".padEnd(0));

function loop(f) {
  var p;

  for (var i = 0; i < 1000; ++i) {
    var __es_v0 = [f, f];
    p = f();
  }

  return p;
}

function f(k) {
  function g() {
    return k;
  }

  k = 2;
  appendToActual(loop(g));

  Object.prototype.__defineGetter__.call(k, "" + "", function () {
    loop(g);
    Object.prototype.valueOf.call(k);
    return k;
  });

  k = 5;
  appendToActual(loop(g));
}

f(loop);
f();
actual;
expected;
